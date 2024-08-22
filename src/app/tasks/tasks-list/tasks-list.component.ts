import { Component, Input, signal } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  @Input() selectedFilter: string = 'all';
  constructor( private tservice:TasksService){}
  tasks = this.tservice.task; 


  onChangeTasksFilter(filter: string) {
    this.selectedFilter=filter;
  }
}
