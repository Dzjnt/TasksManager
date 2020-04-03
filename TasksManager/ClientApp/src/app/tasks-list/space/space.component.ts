import { Component, OnInit, ChangeDetectionStrategy,Input } from '@angular/core';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  @Input() tasks: Array<Task>;
  constructor() { }

  ngOnInit() {
  }

}
