import { Task } from '../../interfaces/task';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { TaskService } from '../../services/task.service';
import { MatSelectModule } from '@angular/material/select';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'task-all-tasks',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})

export class AllTasksComponent{
  constructor(private taskService: TaskService, private utils: UtilitiesService){}
  task = 'All'
  loading = false
  allTasks!: Task[]
  taskPriority = ['Low', 'Medium', 'High']
  @ViewChild(CardsComponent) cardsComponent!: CardsComponent

  filters = [
    {value: 'all', viewValue: 'All'},
    {value: '0', viewValue: 'Low'},
    {value: '1', viewValue: 'Medium'},
    {value: '2', viewValue: 'High'},
    {value: 'opened', viewValue: 'Opened'},
    {value: 'pending', viewValue: 'Pending'},
    {value: 'inprogress', viewValue: 'In Progress'},
    {value: 'completed', viewValue: 'Completed'}
  ]

  ngOnInit() {
    this.loading = true
    this.getALlTask()
  }

  getALlTask = () => {
    this.taskService.getAllTasks().subscribe(data => {
      this.allTasks = data
      this.loading = false
    }, () => {
      // Failed
      this.allTasks = []
      this.loading = false
    })
  }

  filterTask = (filter: any, task: string) => {
    this.task = task
    if (filter == 'all'){
      this.getALlTask()
      return
    } else if (filter == 0 || filter == 1 || filter == 2){
      this.filterPriority(filter)
      return
    } else{
      this.filterStatus(filter)
    }
  }

  filterStatus = (filter: string) => {
    this.taskService.getAllTasks().subscribe(data => {
      this.allTasks = data.filter(task => task.status === filter)
      this.loading = false
    }, () => {
      // Failed
      this.loading = false
    })
  }
  filterPriority = (filter: string) => {
    this.taskService.getAllTasks().subscribe(data => {
      this.allTasks = data.filter(task => task.priority === filter)
      this.loading = false
    }, () => {
      // Failed
      this.loading = false
    })
  }

  formatDate = (date: Date) => this.utils.formatDate(date)
}
