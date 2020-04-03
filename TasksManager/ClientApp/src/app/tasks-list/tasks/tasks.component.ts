import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Task } from '../../../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {

  tasks: Array<Task> = new Array<Task>();
 ;
  constructor(private taskService: TasksService) { };

  addNewTask(taskInput: string): void {  
    this.tasks.push(new Task(null, null, null, null, null, taskInput, null));
    console.log(this.tasks);
  }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks["result"]);
  }
  ngOnInit() {
    this.getTasks();
  }

}
