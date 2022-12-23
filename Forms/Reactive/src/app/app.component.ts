import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentformComponent } from './studentform/studentform.component';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveForm';
  isTest=false;
  constructor(private fb:FormBuilder) { }
 
  stu!:StudentformComponent[]
  
  studentform!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";
  
  ngOnInit(): void {
    this.studentform=this.fb.group({
   
      pname:['',[Validators.required,Validators.pattern(this.namepattern)]],
      Pststus:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]]
    })
    
  }


  onSubmit()
  {
    if(this.studentform.get('pname')?.value == 'test')
    {
      this.isTest=true;
    }
    else{
      this.isTest=false;
    }
    
    console.log(this.studentform.get('pname')?.value);
    console.log(this.studentform.get('pststus')?.updateValueAndValidity);
    console.log(this.studentform.get('email')?.value);
    
 }
}
