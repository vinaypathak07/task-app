import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from './create-task-dialog/create-task-dialog.component';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {
  tasks :any;
  todo:any[];
  done:any[];
  completed:any[];

  constructor(public dialog: MatDialog, private taskService : TaskService) {
    this.todo = [];
    this.done = [];
    this.completed = [];
   }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.todo = this.tasks['todo'];
    this.done = this.tasks['done'];
    this.completed = this.tasks['completed'];
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  /**
   * Open dialog to create task
   * Open dialog to edit
   */
  openDialog(id : number) {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      width: '600px',
      height: '500px',
      data : { id : id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /**
   * Open dialog to confirm the delete task
   */
  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

/**
 * Confirm Dialog Component
 */
@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
})

export class ConfirmDialogComponent { }


