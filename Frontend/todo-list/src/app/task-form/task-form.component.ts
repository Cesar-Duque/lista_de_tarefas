import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<void>();

  title = '';
  description = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    const newTask: Task = {
      title: this.title,
      description: this.description,
      completed: false,
    };

    this.taskService.addTask(newTask).subscribe(() => {
      this.title = '';
      this.description = '';
      this.taskAdded.emit();
    });
  }
}
