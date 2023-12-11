import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

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

  constructor(
    private route: ActivatedRoute, //holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL. The "id" parameter is the id of the hero to display.
    private heroService: HeroService,
    private location: Location // is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
