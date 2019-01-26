import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomly',
  templateUrl: './randomly.component.html',
  styleUrls: ['./randomly.component.css']
})
export class RandomlyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addClass:boolean=false;
  button_color="red";
  color_green="green";
  heading_color="blue";
  field_value='';
  color_val='';
  inputVal='';
  inputColor='white';
  email='chandu2013pal@gmail.com';
  onClick():void{
      this.addClass=true;
  }
  addStyle(){
    let styles={
      'margin':'50px 0 100px 0'
    }
    return styles;
  }
  removeAction():void{
    this.addClass=false;
  }

  addOtherStyle(){
    let styles={
      'margin-bottom':'50px'
    }
    return styles;
  }
  showMessage(event:any){
    this.field_value=event.target.value;
    console.log(this.field_value);
  }
  addColor(event:any){
    this.color_val=event.target.value;
    this.inputVal=this.color_val;
    this.inputColor=this.color_val;
  }
}
