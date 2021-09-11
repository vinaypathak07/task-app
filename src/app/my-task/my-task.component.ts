import { Component, Inject, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from './create-task-dialog/create-task-dialog.component';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {
  tasks: any;
  todo: any[];
  inProgress: any[];
  completed: any[];

  constructor(public dialog: MatDialog, private taskService: TaskService) {
    this.todo = [];
    this.inProgress = [];
    this.completed = [];
  }

  ngOnInit(): void {
    this.taskService.taskAdded.subscribe((tasks: any) => {
      console.log(tasks);
      this.todo = tasks['todo'];
      this.inProgress = tasks['inProgress'];
      this.completed = tasks['completed']
    });
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
  openDialog(id: number) {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      width: '600px',
      height: '500px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /**
   * Open dialog to confirm the delete task
   */
  openConfirmDialog(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width : '240px',
      height: '150px',
      data: {id: id}
    });

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

export class ConfirmDialogComponent {
    id : number;
    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,private taskService:TaskService) {
        this.id = data.id;
    }
    openDelete() {
      this.taskService.deleteTask(this.id);
    }
 }


