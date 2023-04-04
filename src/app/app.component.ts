import { Component, OnInit } from '@angular/core';
import { InfoService} from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api-watch';
  productsList: any[] = [];
  loading:boolean = false;

  constructor(private _api:InfoService){

  }

  searchAllInfo(param:any){
    this.productsList = [];
    this.loading = true;
    setTimeout(()=>{
      this._api.getStore(param).subscribe(
        data=>{
          this.productsList = data;
        }
      );
      this.loading=false;
    },2000)
  
  }

  ngOnInit(): void {
    this.searchAllInfo({category:"general"});
  }
}
