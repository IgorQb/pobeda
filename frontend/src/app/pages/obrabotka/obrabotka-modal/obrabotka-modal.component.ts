import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IAppealResponse } from '../../../models/home/appeal.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './obrabotka-modal.component.html',
  styleUrls: ['./obrabotka-modal.component.less']
})
export class ObrabotkaModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ObrabotkaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAppealResponse) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}