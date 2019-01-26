import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { IPosts } from './posts';
import { from } from 'rxjs';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

users:IEmployee[];
posts:IPosts[];
selectedEmployeeCountRadioButton: string = 'All';
message:String;
  getTotalEmployeeCount():number{
    return this.users.length;
  }

  getMaleEmployeeCount():number{
  return this.users.filter(e=>e.gender==='Male').length;
  }


  getFemaleEmployeeCount():number{
    return this.users.filter(e=>e.gender==='Female').length;
    }
  welcomeMessage(message){
    this.message=message;
  }
  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
}

  constructor( private _employessService:EmployeeService) { }

  ngOnInit() {
    this.users=this._employessService.getEmployees();
    this._employessService.getPosts().subscribe(empPosts=>this.posts=empPosts);
  }

}
