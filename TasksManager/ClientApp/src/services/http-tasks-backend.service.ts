import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskBackendService } from '../services/tasks-backend.service';
import { Task } from '../models/task';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class HttpTasksBackendService extends TaskBackendService {

  private addTaskUrl: string = 'api/task/addtask';
  private getTaskUrl: string = 'api/task/gettask?taskId=';
  private getTasksUrl: string = 'api/task/gettasks';
  private updateTaskUrl: string = 'api/task/updatetask';
  private deleteTaskUrl: string = 'api/task/deletetask?taskId=';



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient) {
    super();
  

  };

  addTask(task: Task): Observable<number> {
    return this.http.post<number>(this.addTaskUrl, task, this.httpOptions).pipe();
  }
  getTask(taskId: number): Observable<Task> {
    return this.http.get<Task>(this.getTaskUrl + taskId).pipe();
  }
  deleteTask(id: number): Observable<void> {
     return this.http.delete<void>(this.deleteTaskUrl + id, this.httpOptions).pipe();
  }
  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.getTasksUrl, this.httpOptions).pipe();
  }
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.updateTaskUrl, JSON.stringify(task), this.httpOptions).pipe();
  }

}
