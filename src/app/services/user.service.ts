import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL: string = environment.API_URL
  private readonly API_KEY: string = environment.API_KEY

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>{
    return this.http.get<User[]>(`${this.API_URL}/users?useYn=eq.true`, {
      headers: {
        'apiKey': this.API_KEY
      }
    })
  }

  deleteUser(id:number, user: User){
    const headers = { 'apiKey': this.API_KEY, 'content-type': 'application/json'}
    const body = JSON.stringify(user)
    return this.http.patch<void>(`${this.API_URL}/users?id=eq.${id}`, body, {'headers': headers})
  }

  addUser(user:User): Observable<User> {
    const headers = { 'apiKey': this.API_KEY, 'content-type': 'application/json'}
    const body = JSON.stringify(user)
    return this.http.post<User>(`${this.API_URL}/users`, body, {'headers': headers})
  }

}