import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly usersApiPath = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.usersApiPath}/${id}`);
  }
}
