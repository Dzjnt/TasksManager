import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Task } from '../../../models/task';
import { TaskBackendService } from '../../../services/tasks-backend.service';


@Injectable()
export class TasksService {
  constructor(private tasksBackendService: TaskBackendService) { };

  addTask(newTask: Task): Observable<number> {
    return this.tasksBackendService.addTask(newTask);
  }
  getTasks(): Observable<Task[]> {
    return this.tasksBackendService.getAllTasks();
  }
  getTask(taskId: number): Observable<Task> {
    return this.tasksBackendService.getTask(taskId);
  }
  deleteTask(taskId: number): Observable<void> {
    return this.tasksBackendService.deleteTask(taskId);
  }
  updateTask(task: Task): Observable<Task> {
    return this.tasksBackendService.updateTask(task);
  }
}

