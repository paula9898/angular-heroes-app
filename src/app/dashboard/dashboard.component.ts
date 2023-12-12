import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-detail/hero';
import { HeroService } from '../hero.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  form: FormGroup = this.fb.group({
    id: [0, []],
    name: this.fb.control('', [Validators.required]),
  });
  heroes: Hero[] = [];
  url = 'http://localhost:3000/hero';

  constructor(private heroService: HeroService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.getHeroes();
    // this.load();
    this.loadTop3();
  }

  // getHeroes(): void {
  //   this.heroService
  //     .getHeroes()
  //     .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  // }
  // async getAllHeroes(): Promise<Hero[]> {
  //   const data = await fetch(this.url);
  //   return (await data.json()) ?? [];
  // }
  load(): void {
    this.heroService.getAll().subscribe((result) => (this.heroes = result));
  }

  loadTop3(): void {
    this.heroService
      .getAll()
      .subscribe((result) => (this.heroes = result.slice(0, 3)));
  }

  onSave(): void {
    console.log(this.form.value);
    if (this.form.invalid) {
      alert('invalid');
    } else {
      this.heroService
        .create(this.form.value)
        .subscribe((result) => this.loadTop3());
    }
  }
}
