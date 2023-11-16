import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  selectedUser$!: Observable<User>;

  constructor(private userService: UserService) {}

  users$ = this.userService.getUsers();

  OnSelect(userId: number): void {
    this.selectedUser$ = this.userService.getUserById(userId);
  }
}
