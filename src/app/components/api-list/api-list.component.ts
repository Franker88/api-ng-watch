import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class ApiListComponent {
  @Input() productList:any;
}
