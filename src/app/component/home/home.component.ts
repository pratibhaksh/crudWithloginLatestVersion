import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserPolicy } from '../../model/policy.model';
import { User } from '../../model/user.model';
import { MatDialog } from '@angular/material/dialog';
import { AddUserPolicyComponent } from '../add-user-policy/add-user-policy.component';
import { DeleteUserPolicyComponent } from '../delet-user-policy/delet-user-policy.component';
import { EditUserPolicyComponent } from '../edit-user-policy/edit-user-policy.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIcon,
    HttpClientModule],
 templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

  @Component({
    selector: 'app-table',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {
  displayedColumns = ['name','email','policyType','policyNumber','actions'];
  dataSource = new MatTableDataSource<UserPolicy>();
  userPolicyData: UserPolicy[] = [];
  constructor(private userpolicyservce:ApiService,public dialog: MatDialog){}

  openDialog(row: any): void {
    this.dialog.open(AddUserPolicyComponent, {
      data: row
    });
  }
  ngOnInit(): void {
    this.userpolicyservce.getAllUserPolicyList().subscribe(data=>{
       this.userPolicyData = data
   
    })
  }

  editUser(user: any): void {
    const dialogRef = this.dialog.open(EditUserPolicyComponent, {
      width: '250px',
      data: {...user}
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedUser = { ...user, ...result };
        this.userpolicyservce.updateUserPolicy(updatedUser).subscribe(() => {
          const index = this.userPolicyData.findIndex(u => u.id === user.id);
          this.userPolicyData[index] = updatedUser;
        });
      }
    });
  }

  deleteUser(id: number) {
    const dialogRef = this.dialog.open(DeleteUserPolicyComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userpolicyservce.deleteUserPolicy(id).subscribe(() => {
          console.log('Record deleted');
        });
      }
    });
  }
  }
