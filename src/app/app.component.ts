import { Component } from '@angular/core';
import {QueryComponent} from './query/query.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QueryComponent],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-query></app-query>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
