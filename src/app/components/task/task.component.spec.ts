import { TaskComponent } from './task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaskComponent', () => {
  let component: TaskComponent
  let fixture: ComponentFixture<TaskComponent>

  // Configure TestBed
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        // Other required modules
      ],
      providers: [
        // Mock services (AuthService, TaskService, etc.)
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  // Test Form Validation
  it('should create a valid form', () => {
    expect(component.taskForm).toBeDefined()
    expect(component.taskForm.valid).toBeFalsy() // Initially invalid
  })

  it('should mark form invalid when due date is in the past', () => {
    component.taskForm.patchValue({
      dueDate: '01/01/2020', // Past date
    })
    fixture.detectChanges()
    expect(component.taskForm.invalid).toBeTruthy()
  })

  // Test Property and Methods
  it('should emit toggle event when toggleTask() is called', () => {
    const spy = spyOn(component.toggle, 'emit')
    component.toggleTask()
    expect(spy).toHaveBeenCalledWith(false)
  })

  it('should call createTask() when addTask() is called', () => {
    const createTaskSpy = spyOn(component.taskService, 'createTask')
    component.addTask()
    expect(createTaskSpy).toHaveBeenCalled()
  })

  //Test Interaction with Services
  it('should call updateTask() when editTask1() is called', () => {
    const updateTaskSpy = spyOn(component.taskService, 'updateTask')
    component.editTask1()
    expect(updateTaskSpy).toHaveBeenCalled()
  })

  // Cleanup
  afterEach(() => {
    fixture.destroy()
  })
})