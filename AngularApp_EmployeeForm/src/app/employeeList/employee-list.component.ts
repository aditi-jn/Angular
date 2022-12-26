import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeForm } from '../model/employee-form';
import { ServiceService } from '../service.service';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeelistComponent implements OnInit {
 
 
  @Output() s = new EventEmitter<EmployeeForm>();
  

  constructor(private cs:ServiceService) { }

  stu!:EmployeeForm[];
  

  ngOnInit(): void {

    this.cs.employeeGetData().subscribe(list =>{

      this.stu=list
    })
  }

  deleteDataById(sid :number)
  {
  this.cs.deleteemployeeData(sid).subscribe( data =>{
  console.log(data);
  window.location.reload();
})
  }

  editDataById(id :number)
  {
    this.cs.getemployeeData(id).subscribe( (data:any) =>{
       this.s.emit(data);
        });
       
}
}
