import { Task } from '../../interfaces/task';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from '../task/task.component';
import { CardsComponent } from '../cards/cards.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AllTasksComponent } from '../all-tasks/all-tasks.component';

@Component({
  selector: 'task-home',
  standalone: true,
  imports: [AllTasksComponent, FooterComponent, HeaderComponent, TaskComponent, CommonModule, MatIconModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent{
  add = false
  loading = false
  allTasks!: Task[]
  greet = 'Good day!'
  @ViewChild(CardsComponent) cardsComponent!: CardsComponent

  ngOnInit() {
    this.updateGreetingAndTime() // Initial update
  }

  updateGreetingAndTime = () => {
    const now = new Date()
    const hourOfDay = now.getHours()
    hourOfDay < 12 ? this.greet = 'Good morning!' : hourOfDay < 18 ? this.greet = 'Good afternoon!' : this.greet = 'Good evening!'
  }
  addTask = () => this.add = !this.add
}
