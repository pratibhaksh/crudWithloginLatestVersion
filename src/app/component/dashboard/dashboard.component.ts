import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserPolicy } from '../../model/policy.model';
import { ApiService } from '../../service/api.service';
import { AddUserPolicyComponent } from '../add-user-policy/add-user-policy.component';
import { DeleteUserPolicyComponent } from '../delet-user-policy/delet-user-policy.component';
import { EditUserPolicyComponent } from '../edit-user-policy/edit-user-policy.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MaterialModule } from '../../material/material.module';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  imports: [MatTableModule,MatIcon,HttpClientModule,NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
displayedColumns = ['name','email','policyType','policyNumber','actions'];
  dataSource = new MatTableDataSource<UserPolicy>();
  userPolicyData: UserPolicy[] = [];
  constructor(private userPolicyService:ApiService,public dialog: MatDialog){}

  openDialog(row: any): void {
    this.dialog.open(AddUserPolicyComponent, {
      data: row
    });
  }
  ngOnInit(): void {
    this.userPolicyService.getAllUserPolicyList().subscribe(data=>{
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
        this.userPolicyService.updateUserPolicy(updatedUser).subscribe(() => {
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
        this.userPolicyService.deleteUserPolicy(id).subscribe(() => {
          console.log('Record deleted');
        });
      }
    });
  }
}
