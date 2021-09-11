import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = {
    todo : [
        {id : 1, title:'Get to work', description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp:''},
        {id : 2, title:'Pick up groceries',  description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
        {id:  3, title:'Go home' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
        {id:  4, title:'Fall Asleep' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''}
    ],
    done : [
      {id:  101, title:'Get up' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {id:  102, title:'Brush teeth' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {id:  103, title:'Take a shower' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {id:  104, title:'Walk dog' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {id:  105, title:'Problem Solving' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''}

    ] ,
    completed : [
      {id:  201, title:'Go to friends home' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {id:  202, title:'Go out for lunch' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
      {id:  203, title:'Do project' ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',timestamp:''},
    ]
  }

  constructor() { }

  getTasks() {
      return this.tasks;
  }

  getToDoItemById(id : number) : any {
      this.tasks.todo.forEach((task:any) => {
        if (task.id === id) {
            return task;
        }
    })
  }
}
