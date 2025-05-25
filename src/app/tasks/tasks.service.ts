import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Finish Laundry',
      summary: 'Collect all dirty clothes and do a laundry',
      dueDate: '2025-05-26',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Go to dealership',
      summary: 'Visit nearest Toyota dealership for upcoming car maintainance',
      dueDate: '2025-05-22',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Buy furniture',
      summary: 'Buy furniture such as sofa, tv stand etc.',
      dueDate: '2025-06-02',
    },
  ];

  constructor() {
    const tasksFromLocalStorage = localStorage.getItem('tasks');
    if (tasksFromLocalStorage) {
      this.tasks = JSON.parse(tasksFromLocalStorage);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime.toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.storeTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.storeTasks();
  }

  private storeTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
