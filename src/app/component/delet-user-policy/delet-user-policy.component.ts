import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delet-user-policy',
  imports: [],
  templateUrl: './delet-user-policy.component.html',
  styleUrl: './delet-user-policy.component.scss'
})
export class DeleteUserPolicyComponent {


  getData
  constructor(
    public dialogRef: MatDialogRef<DeleteUserPolicyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
       
  ) {
    this.getData = data;

    console.log(this.getData)
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
