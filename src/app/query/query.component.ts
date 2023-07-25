import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by query">
        <button class="primary" type="button"> Generate Random Query </button> 
      </form>
    </section>
  `,
  styleUrls: ['./query.component.css']
})
export class QueryComponent {

}
