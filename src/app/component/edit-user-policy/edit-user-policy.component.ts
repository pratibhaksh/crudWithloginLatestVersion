import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../service/api.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-user-policy',
  imports: [MatFormField, MatLabel, ReactiveFormsModule,MatInputModule],
  templateUrl: './edit-user-policy.component.html',
  styleUrl: './edit-user-policy.component.scss'
})
export class EditUserPolicyComponent {
  public editForm!: FormGroup;
  getData
    constructor(private fb: FormBuilder,
      public dialogRef: MatDialogRef<EditUserPolicyComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
         
    ) {
      this.getData = data
    }
  
    ngOnInit(): void {
      this.editForm = this.fb.group({
        name: [this.getData.name, Validators.required],
        email: [this.getData.email, [Validators.required]],
        policyType: [this.getData.policyType, Validators.required],
        policyNumber: [this.getData.policyNumber, Validators.required],
      
      });
    }
  
  
  
    onCancel(): void {
      this.dialogRef.close();
    }
  
    onSave(): void {
      if (this.editForm.valid) {
        this.dialogRef.close(this.editForm.value);
      }
    }
}
