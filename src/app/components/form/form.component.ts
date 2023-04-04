import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() selectedParams = new EventEmitter<any>();
  selectedCategory = "general";

  categories: any[] = [
    {value: "general",name:"General"},
    {value: "men's%20clothing",name:"Men's Clothing"},
    {value: "women's%20clothing",name:"Women's clothing"},
    {value: "jewelery",name:"Jewelery"},
    {value: "electronics",name:"Electronics"},
  ]

  searchInfo(){
    const PARAMS = {
      category: this.selectedCategory,
    }
    this.selectedParams.emit(PARAMS);
  /*   console.log(this.selectedCategory);
    console.log(this.rateSelected); */
  }
}
