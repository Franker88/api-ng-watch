import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() selectedParams = new EventEmitter<any>();
  selectedCategory = "general";
  otherSelected = "one";

  categories: any[] = [
    {value: "general",name:"General"},
    {value: "special",name:"Special"},
    {value: "unique",name:"Unique"},
    {value: "unusual",name:"Unusual"},
    {value: "limited",name:"Limited"},
  ]
  other: any[] = [
    {value: "one",name:"First"},
    {value: "two",name:"Second"},
    {value: "three",name:"Third"},
    {value: "four",name:"Fourth"},
    {value: "five",name:"Fifth"},
  ]

  searchInfo(){
    const PARAMS = {
      category: this.selectedCategory,
      other: this.otherSelected,
    }
    this.selectedParams.emit(PARAMS);
  /*   console.log(this.selectedCategory);
    console.log(this.otherSelected); */
  }
}
