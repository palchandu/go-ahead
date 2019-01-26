import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NoticeMessageComponent } from './notice-message/notice-message.component';
import { RandomlyComponent } from './randomly/randomly.component';
import { from } from 'rxjs';
import { LoopingCustomPipe } from './employee/looping-custom.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { EmployeeService } from './employee/employee.service';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';

const appRoute:Routes=[
      { path:'home',component:HomeComponent },
      { path:'employee',component:EmployeeComponent},
      { path:'member',component:ListEmployeesComponent},
      { path:'create_member',component:CreateEmployeesComponent},
      { path:'',redirectTo:'/home',pathMatch:'full'},
      { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NoticeMessageComponent,
    RandomlyComponent,
    LoopingCustomPipe,
    EmployeeComponent,
    PageNotFoundComponent,
    HomeComponent,
    EmployeeCountComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
