import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskStatus } from '../../taks.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task; // Ensure `task` is always defined

  @Output() statusChange = new EventEmitter<{ taskId: string, status: TaskStatus }>();

  get taskStatus(): string {
    switch (this.task.status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  }

  onChangeTaskStatus(taskId:string,status: string) {
    let newStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }

    this.statusChange.emit({ taskId: this.task.id, status: newStatus });
  }}
