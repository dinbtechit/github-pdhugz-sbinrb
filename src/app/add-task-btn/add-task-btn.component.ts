import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailyService } from '../daily/daily.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

export interface DailyTask {
  type: string;
  task: string;
}

@Component({
  selector: 'app-add-task-btn',
  templateUrl: './add-task-btn.component.html',
  styleUrls: ['./add-task-btn.component.scss'],
})
export class AddTaskBtnComponent implements OnInit {
  constructor(public dialog: MatDialog, public dailyService: DailyService) {}

  ngOnInit(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        const daily: DailyTask = {
          type: 'daily',
          task: 'test',
        };
        this.dailyService.setDailies([daily]);
      }
      console.log('The dialog was closed');
    });
  }
}
