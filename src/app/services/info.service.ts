import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getStore(params:any): Observable<any>
  {
    let URL = "https://fakestoreapi.com/products";
    if(params.category!="general"){
      URL = URL+"/category/"+params.category;
    }
    return this.http.get(URL);
  }
}
