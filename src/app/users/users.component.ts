import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  selectedUser$!: Observable<User>;
  selecteduser?: User;

  constructor(private userService: UserService, private router: Router) {}

  users$ = this.userService.getUsers();

  onButtonClicked(id: number): void {
    this.router.navigate(['/user', id]);
  }
}
