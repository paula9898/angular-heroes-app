import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, catchError, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  [x: string]: any;
  private heroesUrl = 'api/heroes'; // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  // getHeroes(): Observable<Hero[]> {
  //   this.messageService.add('HeroService: fetched heroes');
  //   const heroes = of(HEROES);
  //   return heroes;
  //   // return HEROES;
  // }

  /** GET heroes from the server */
  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl);
  // }

  // getHero(id: number): Observable<Hero> {
  //   const hero = HEROES.find((h) => h.id === id)!;
  //   return of(hero);
  // }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
}
