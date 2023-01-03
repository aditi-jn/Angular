import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
export interface Employee {

  ename: string;

  empid: number;

  designation: string;



}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'materialModule';
  sports: string[] = ['cricket', 'football', 'hockey', 'snooker'];

}
