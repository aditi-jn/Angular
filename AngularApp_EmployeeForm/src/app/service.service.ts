import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeForm } from './model/employee-form';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000";
  stu:EmployeeForm=new EmployeeForm();
  
  employeeSave(E:EmployeeForm)
  {
    return this.http.post<EmployeeForm>(this.url+"/EmployeeData",E);
  }

  employeeGetData():Observable<EmployeeForm[]>
  {
     return this.http.get<EmployeeForm[]>(this.url+"/EmployeeData");
  }

 deleteemployeeData(id:number)
 {
     return this.http.delete(this.url+"/EmployeeData/"+id);
 }

 getemployeeData(id:number)
 {
  return this.http.get<EmployeeForm>(this.url+"/EmployeeData/"+id);
}
    
 updateemployeeData(stu:EmployeeForm)
 {
  return this.http.put<EmployeeForm>(this.url+"/EmployeeData/"+stu.id,stu);
}

}
