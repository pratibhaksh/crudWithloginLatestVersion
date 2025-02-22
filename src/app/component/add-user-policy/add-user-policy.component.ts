import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { MatTable } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-user-policy',
  imports: [MatFormField, MatLabel, ReactiveFormsModule,MatInputModule],
  templateUrl: './add-user-policy.component.html',
  styleUrl: './add-user-policy.component.scss'
})
export class AddUserPolicyComponent implements OnInit{
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userpolicyService: ApiService) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      policyType: ['', [Validators.required]],
      policyNumber: ['', [Validators.required]]

    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userpolicyService.addUserPolicyDetail(this.userForm.value).subscribe(response => {
        console.log('User added successfully!', response);
        this.userForm.reset();
      });
    }
  }
}
