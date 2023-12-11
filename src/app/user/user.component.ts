import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  readonly user$ = new BehaviorSubject<User>({} as User);
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(map((v) => v['id'])).subscribe((v) => {
      console.log(v);
      this.userService.getUserById(v).subscribe((user) => {
        this.user$.next(user);
      });
    });
  }
}
