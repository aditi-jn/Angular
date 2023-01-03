import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelComponent } from './model/model.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceserviceService {


  constructor(public http: HttpClient) { }
  url: string = "http://localhost:3000";

  Save(obj: ModelComponent) {
    console.log("save");
    return this.http.post<ModelComponent>(this.url + "/Register", obj);
  }
  studentGetData(): Observable<ModelComponent[]> {
    return this.http.get<ModelComponent[]>(this.url + "/Register");
  }
  SaveInfo(obj: ModelComponent) {
    console.log("save");
    return this.http.post<ModelComponent>(this.url + "/DetailInfo", obj);

  }
}
