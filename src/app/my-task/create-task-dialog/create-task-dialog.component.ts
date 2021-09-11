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

  createTaskForm: FormGroup;
  id: number;
  taskStatus = true;
  task: any;
  taskTitle: string = '';
  taskDescription: string = '';
  taskEditMode = false;
  constructor(public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private taskService: TaskService) {

    this.id = this.data.id;
    if (this.id != -1) {
      this.task = this.taskService.getToDoItemById(this.id);
      this.taskTitle = this.task.title;
      this.taskDescription = this.task.description;
      this.taskEditMode = true;
    }
    this.createTaskForm = new FormGroup({
      title: new FormControl(this.taskTitle, Validators.required),
      description: new FormControl(this.taskDescription, Validators.required),
      status: new FormControl('todo')
    });

    console.log(this.data);

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
      timestamp: new Date()
    }
    if(this.taskEditMode) {
      this.taskService.editTask(newTask, this.id, newTaskStatus);
    } else {
      this.taskService.addNewTask(newTask, newTaskStatus);
    }
  }
}
