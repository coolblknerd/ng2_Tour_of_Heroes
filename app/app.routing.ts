import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

// Exports the routing constant initialized above using 'RouterModule.forRoot' method to array of Routes
// Method returns a configured router module that we'll add to root NgModule, AppModule

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// 'forRoot' method is called b/c we're providing a configured router at the root of the app.
// ^ => gives us the Router service providers and directives needed for routing.
