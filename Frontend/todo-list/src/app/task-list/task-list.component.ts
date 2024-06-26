import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task.id!, task).subscribe({
      next: () => this.loadTasks(),
      error: (err) => console.error('Failed to update task', err),
    });
  }

  editTask(task: Task): void {
    task.editing = true;
  }

  cancelEdit(task: Task): void {
    task.editing = false;
    this.loadTasks(); 
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task.id!, task).subscribe({
      next: () => {
        task.editing = false;
        this.loadTasks();
      },
      error: (err) => console.error('Failed to update task', err),
    });
  }
}
