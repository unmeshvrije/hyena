import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import queries from "../../../dbpedia50_head_queries.json"

type QueryObject  = {
  [key: string]: string;
};

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [CommonModule],
  template: `
  <table>
      <tr>
        <th *ngFor="let col of colDefs">{{col.label}}</th>
        <th> Short Answer </th>
      </tr>

      <tr *ngFor="let row of data">
        <td *ngFor="let col of colDefs">{{row[col.field]}}</td>
        <td> Short answer </td>
      </tr>
    </table>
  `,
  styleUrls: ['./query.component.css']
})

export class QueryComponent {
  // column definitions
  colDefs = [
  { label: "Query", field: "query" },
  { label: "Answer", field: "answer" },
  //{ label: "Short Answer", field: "short" },
  //{ label: "Long Answer", field: "long" },
  ];

  // datasource
  data: Array<QueryObject> = queries;
}
