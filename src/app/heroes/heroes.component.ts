import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from '../hero-detail/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  // hero = 'Windstorm';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };
  heroes: Hero[] = [];
  selectedHero?: Hero;

  getHeroes(): void {
    this.heroService.getAll().subscribe((heroes) => (this.heroes = heroes)); //method calls the getHeroes() method of HeroService to retrive a ölist of heros
    // it uses subscribe method to listen for the asynch response and updates the heroes proeprty when the data is recived
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected hero id=${hero.id}');
  }
  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.heroService.getAll().subscribe((result) => (this.heroes = result));
  }
}
