import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserPolicy } from '../model/policy.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  private apiUrl = 'http://localhost:3000';

   constructor(
      public http: HttpClient
    ) { }
   
   getAllUserPolicyList(): Observable<UserPolicy[]> {
      return this.http.get<UserPolicy[]>(this.apiUrl + '/policyUserList');
    }
   
    addUserPolicyDetail(policyDetails:UserPolicy):Observable<UserPolicy>
    {
      return this.http.post<UserPolicy>(this.apiUrl + '/userPolicyList', policyDetails)
    }

   
    updateUserPolicy(user: User): Observable<User> {
    //  return this.http.put<User>(`${this.apiUrlEdit}/${user.id}`, user);
       return this.http.put<User>(`${this.apiUrl}/userPolicyList/${user.id}`, user);

    }

    deleteUserPolicy(id: number): Observable<User> {
         return this.http.delete<User>(`${this.apiUrl}/userPolicyList/${id}`);
 
      }
   
    // login(email:string):Observable<UserPolicyLIST>
    // {
    //   return this.http.get<UserPolicyLIST>(`${this.apiUrl}/signupUser?email=${email}`)
    // }

    login(email: string, password: string): Observable<boolean> {

      return this.http.get<any[]>(`${this.apiUrl}/users?email=${email}&password=${password}`)
      .pipe(
        map(users => users.length > 0)
      );
    }

    addRegistration(userPolicyListDetails:User)
    {
      return this.http.post(`${this.apiUrl}/users`,userPolicyListDetails)
    }


}
