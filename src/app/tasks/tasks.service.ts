import { Injectable, Input } from '@angular/core';
import { Task, TaskStatus } from './taks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
task?:Task[]=[]
  constructor() { }
  addTask(taskData:{title:string,description:string}){
    this.task?.push({
      title:taskData.title,
      description:taskData.description,
      id:Math.random().toString(),
      status:"OPEN"
    })
    console.log(this.task,"wrughsdhfj");
    
  };

  updateTaskStatus(taskId:string,status:TaskStatus){
    this.task?.forEach((task)=>task.id===taskId ? {...task,status:status} : task)
  }
}
