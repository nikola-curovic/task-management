import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../interfaces/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Input() tasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  markTaskAsCompleted(id: string): void {
    this.taskService.markTaskAsCompleted(id);
  }

}
