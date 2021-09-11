import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = {
    todo: [
      { title: 'Get to work', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' },
      { title: 'Pick up groceries', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' },
      { title: 'Go home', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' },
      { title: 'Fall Asleep', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' }
    ],
    inProgress: [
      { title: 'Get up', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' },
      { title: 'Brush teeth', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' },
      { title: 'Take a shower', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' },
      { title: 'Walk dog', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' },
      { title: 'Problem Solving', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' }

    ],
    completed: [
      { title: 'Go to friends home', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' },
      { title: 'Go out for lunch', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' },
      { title: 'Do project', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', timestamp: '' },
    ]
  }

  taskAdded = new BehaviorSubject<any>(this.tasks);

  constructor() { }

  /**
   * 
   * @param id 
   * @returns todo task by id 
   */
  getToDoItemById(id: number): any {
    return this.tasks.todo[id];
  }

  /**
   * Adds new task to tasks as per the status
   * @param newTask 
   * @param newTaskStatus 
   */
  addNewTask(newTask: any, newTaskStatus: string) {
    if (newTaskStatus === 'todo') {
      this.tasks.todo.push(newTask);
      console.log(this.tasks.todo);
    } else if (newTaskStatus == 'inProgress') {
      this.tasks.inProgress.push(newTask);
    } else {
      this.tasks.completed.push(newTask);
    }
    this.taskAdded.next(this.tasks);
  }

  /**
   * 
   * @param newTask 
   * @param id 
   * @param newTaskStatus 
   */
  editTask(newTask:any, id:number, newTaskStatus:string) {
    let task : any;
    if(newTaskStatus === 'todo') {
        task = this.tasks.todo[id];
    } else if(newTaskStatus === 'inProgress') {
        this.addNewTask(newTask, newTaskStatus);
        // Call Delete in todo
    } else {
        this.addNewTask(newTask, newTaskStatus);
        // Call Delete in todo
    }  
    task.title = newTask.title;
    task.description = newTask.description;
    this.taskAdded.next(this.tasks);
  }
}
