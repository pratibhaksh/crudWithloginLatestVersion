import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  imports: [MatIcon,MatToolbar,MatMenu,MatMenuModule,NgIf ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
private isBrowser:boolean
  getUserProfile:any

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  
  ngOnInit(): void {
    if (this.isBrowser) {
    
      this.getUserProfile  = localStorage.getItem('user');
   
      if(this.getUserProfile)
        {
          this.getUserProfile = JSON.parse(this.getUserProfile)
        }
    } else {
      console.warn('localStorage is not available.');
    }

    
  }

}
