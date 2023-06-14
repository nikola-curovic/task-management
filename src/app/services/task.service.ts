import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = [
    { id: uuidv4(), title: 'Task 1', completed: true },
    { id: uuidv4(), title: 'Task 2', completed: false },
    { id: uuidv4(), title: 'Task 3', completed: true },
  ];

  getTasks(): ITask[] {
    return this.tasks;
  }

  addTask(title: string): void {
    this.tasks.push({
      id: uuidv4(),
      title,
      completed: false
    });
  }

  markTaskAsCompleted(id: string): void {
    let taskList = [...this.tasks];
    taskList.forEach((task) => {
      if(id === task.id) {
        task.completed = !task.completed;
      }
    })

    this.tasks = taskList;
  }

  filterTasks(filter: string): ITask[] {
    if (filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (filter === 'incompleted') {
      return this.tasks.filter(task => !task.completed);
    } else {
      return this.tasks;
    }
  }
}
