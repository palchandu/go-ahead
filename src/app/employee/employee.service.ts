import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { IPosts } from './posts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees():IEmployee[]{
    return [
      {
        "ID": 1,
        "UserName": "User 1",
        "Password": "Password1",
        "gender":"Male"
      },
      {
        "ID": 2,
        "UserName": "User 2",
        "Password": "Password2",
        "gender":"Female"
      },
      {
        "ID": 3,
        "UserName": "User 3",
        "Password": "Password3",
        "gender":"Male"
      },
      {
        "ID": 4,
        "UserName": "User 4",
        "Password": "Password4",
        "gender":"Female"
      },
      {
        "ID": 5,
        "UserName": "User 5",
        "Password": "Password5",
        "gender":"Male"
      },
      {
        "ID": 6,
        "UserName": "User 6",
        "Password": "Password6",
        "gender":"Male"
      },
      {
        "ID": 7,
        "UserName": "User 7",
        "Password": "Password7",
        "gender":"Female"
      },
      {
        "ID": 8,
        "UserName": "User 8",
        "Password": "Password8",
        "gender":"Male"
      },
      {
        "ID": 9,
        "UserName": "User 9",
        "Password": "Password9",
        "gender":"Female"
      },
      {
        "ID": 10,
        "UserName": "User 10",
        "Password": "Password10",
        "gender":"Male"
      }
    ]
  }
getPosts():Observable<IPosts[]>{
  return this._http.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts');
}

  constructor( private _http:HttpClient) { }
}
