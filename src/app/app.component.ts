import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-watch';

  searchAllInfo(param:any){
    console.log("I'm the parent");
    console.log(param);
  }
}
