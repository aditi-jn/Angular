import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Implement_NgClass_NgModel_NgStyle';
  UserName:string="";
  Password:string="";
  IsShow:boolean=false;
  ds_Error='username is reqired';
  ds_Error1='Password is reqired';
  show()
  {
    if(this.UserName!='' && this.Password!='')
      this.IsShow=true;
    else
      this.IsShow = false;
  }
  validateUserName(){
    if(this.UserName=='')
    {
      this.ds_Error='username is reqired';
      return this.ds_Error;
    }
    return this.ds_Error;
  } 
  validatePassword(){
    if(this.Password=='')
    {
      this.ds_Error1='Password is reqired';
      return this.ds_Error1;
    }
    return this.ds_Error1;
  }
}
