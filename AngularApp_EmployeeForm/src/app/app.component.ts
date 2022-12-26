import { Component, EventEmitter,Output,Input, ViewChild } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeForm } from './model/employee-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee';

  @ViewChild(EmployeeComponent) emp;
  public parentData($event:EmployeeForm){
    this.emp.childData($event);

  }
}

