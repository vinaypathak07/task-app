import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.css']
})
export class CreateTaskDialogComponent implements OnInit {

  createTaskForm : FormGroup;
  id : number;
  taskStatus = true;
  constructor( public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private taskService:TaskService) { 
    
    this.createTaskForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      status : new FormControl('todo')
    });

    console.log(this.data);
    this.id = this.data.id;
    if(this.id != -1) {

    }
  }

  ngOnInit(): void {
  }

  createTask() {
    console.log(this.createTaskForm);
    const title = this.createTaskForm.value.title;
    const description = this.createTaskForm.value.description;
    const newTaskStatus = this.createTaskForm.value.status;
    console.log(newTaskStatus);
    let newTask = {
          title: title,
          description: description,
          timestamp : new Date()
    }
    this.taskService.addNewTask(newTask,newTaskStatus);
  }
}
