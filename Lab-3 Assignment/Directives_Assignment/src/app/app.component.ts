import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives_Assignment';
  NumberArray:number[]=[];
  IsShow=true;
  count=0;

  toggle(){
    this.count+=1;
    this.NumberArray.push(this.count);
    this.IsShow=!this.IsShow;
  }
}
