import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmployeeForm } from '../model/employee-form';
import { ServiceService } from '../service.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,private cs:ServiceService) { }
  
  stu!:EmployeeForm[]
  employeeform!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";
  
  ngOnInit(): void {


    this.employeeform=this.fb.group({
      id:[''],
      employeeName:['',[Validators.required,Validators.pattern(this.namepattern)]],
      address:['',[Validators.required]],
      contactNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]]
   
    })
  }


  onSubmit()
  {
    if(this.employeeform.valid)
    { 
      console.log(this.employeeform.value.id);
      if(this.employeeform.valid)
    {
      console.log(this.employeeform.value);
      if(this.employeeform.value.id != '')
      {
        this.cs.updateemployeeData(this.employeeform.value).subscribe();
      }

      else{
        this.cs.employeeSave(this.employeeform.value).subscribe();
      }
    }  
    window.location.reload();  
    }
 }
 Reset(){
  this.employeeform.patchValue({
      id:'',
      employeeName:'',
      address:'',
      email:'',
      contactNo:''

  })
 
 }
  public childData($event:EmployeeForm){
    console.log($event);
    this.employeeform.patchValue({
      
      id:$event.id,
      employeeName:$event.employeeName,
      address:$event.address,
      email:$event.email,
      contactNo:$event.contactNo
    })
  }

}
