import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private isBrowser: boolean;
   loginForm!: FormGroup;
  
    constructor(private fb: FormBuilder,private userPolicyService:ApiService, private routes:Router,
      @Inject(PLATFORM_ID) private platformId: object) {
        this.isBrowser = isPlatformBrowser(platformId) 
      }
  
    ngOnInit() {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }
  
   
    onSubmit() {
      if (this.loginForm.valid) {
        const {email, password} = this.loginForm.value;
        this.userPolicyService.login(email,password).subscribe((response)=>{
          if(response)
            {
              if (this.isBrowser) {
                localStorage.setItem('user',JSON.stringify(email));
                this.routes.navigate(['/dashboard'])
              } else {
                console.warn('localStorage is not available on the server.');
              }
            }
        })
        console.log('Form Submitted!', this.loginForm.value);
      }
    }

}
