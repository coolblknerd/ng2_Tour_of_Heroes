import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})

// 'routerLink' is a directive, binded to a string, that tells the router where to navigate when the user clicks the link.

export class AppComponent {
  title = "Tour of Heroes";
}
