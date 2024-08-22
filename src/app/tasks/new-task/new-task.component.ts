import { Component, ElementRef, ViewChild } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
 @ViewChild('form') formEl?:ElementRef<HTMLFormElement> 
 constructor(private TaskService:TasksService){} 
 
 onAddTask(title: string, description: string) {
    this.formEl?.nativeElement.reset();
    this.TaskService.addTask({title,description});
  }
}
