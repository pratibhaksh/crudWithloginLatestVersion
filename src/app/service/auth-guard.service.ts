import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService{

  constructor(private authService: ApiService,) {}

  // canActivate(): boolean {
  //   if (this.authService.isAuthenticated()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }
}
