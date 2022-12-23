import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string='';
  subscription: string='';
  password: string='';
  isHide=false;
  isHide1=false;
  isHide2=false;
  isSuccess=false;
  expression: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  
  constructor() {}
  
  onSubmit() {
  console.log('Form values:', {
  email: this.email,
  subscription: this.subscription,
  password: this.password
  });

  let res=this.expression.test(this.email);
    res == false?this.isHide=true: this.isHide=false;
    this.subscription == ''?this.isHide1=true: this.isHide1=false;
    this.password == ''?this.isHide2=true: this.isHide2=false;
    ((this.isHide==true) || (this.isHide1==true) || (this.isHide2==true))?this.isSuccess=false:this.isSuccess=true;


}
}





