import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Hero } from './hero-detail/hero';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HeroService {
  url = 'http://localhost:3000/hero';

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  // async getAllHeroes(): Promise<Hero[]> {
  //   const data = await fetch(this.url);
  //   return (await data.json()) ?? [];
  // }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  create(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>('http://localhost:3000/hero', hero);
  }

  getAll(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>('http://localhost:3000/hero');
  }
}
