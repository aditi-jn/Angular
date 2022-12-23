import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StringInterPolation_propertyBinding_eventBinding';
  A:number=0;
  B:number=0;
  Add:number=0;
  Sum(){
    this.Add=this.A+this.B;
  }
}
