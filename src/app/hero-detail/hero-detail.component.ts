import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  // @Output() editNameEvent = new EventEmitter<string>();

  // updateHeroname(value: string) {
  //   this.editNameEvent.emit(value);
  // }
}
