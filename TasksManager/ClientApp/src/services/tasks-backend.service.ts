import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable()
export abstract class TaskBackendService {

  abstract addTask(task: Task): Observable<number>;

  abstract getTask(taskId: number): Observable<Task>;

  abstract deleteTask(id: number): Observable<void>;

  abstract getAllTasks(): Observable<Task[]>;

  abstract updateTask(task: Task): Observable<Task>;

}
