import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HeroesComponent } from './heroes/heroes.component';

// const routes: Routes = [{ path: 'user/:id', component: UserComponent }];

const routes: Routes = [{ path: 'heroes', component: HeroesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //
  exports: [RouterModule],
})
export class AppRoutingModule {}
