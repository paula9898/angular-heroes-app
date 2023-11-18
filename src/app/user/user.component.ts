import { Component, Input } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user!: User;

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.data['name']);
  }
}
