import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = {
    todo : [
        {title:'Get to work', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp:''},
        {title:'Pick up groceries',  description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
        {title:'Go home' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
        {title:'Fall Asleep' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''}
    ],
    inProgress : [
      {title:'Get up' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {title:'Brush teeth' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {title:'Take a shower' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {title:'Walk dog' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {title:'Problem Solving' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''}

    ] ,
    completed : [
      {title:'Go to friends home' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {title:'Go out for lunch' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {title:'Do project' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
    ]
  }

  taskAdded = new BehaviorSubject<any>(this.tasks);

  constructor() { }

  getToDoItemById(id : number) : any {
      this.tasks.todo.forEach((task:any) => {
        if (task.id === id) {
            return task;
        }
    })
  }

  addNewTask(newTask : any, newTaskStatus: string) {
      if(newTaskStatus === 'todo') {
        this.tasks.todo.push(newTask);
        console.log(this.tasks.todo);
      } else if(newTaskStatus == 'inProgress') {
        this.tasks.inProgress.push(newTask);
      } else {
        this.tasks.completed.push(newTask);
      }
      this.taskAdded.next(this.tasks);
  }
}
