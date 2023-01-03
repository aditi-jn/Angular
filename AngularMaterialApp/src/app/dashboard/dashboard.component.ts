import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelComponent } from '../model/model.component';
import { ServiceserviceService } from '../serviceservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  constructor(private fb: FormBuilder, private cs: ServiceserviceService, private router: Router) { }
  firstform!: FormGroup;
  secondform!: FormGroup;
  thirdform!: FormGroup;
  data: ModelComponent = {};

  emailpattern!: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!: "^[a-zA-Z ]{6,32}$";
  fnamepattern!: "^[a-zA-Z ]{6,32}$";
  mnamepattern!: "^[a-zA-Z ]{6,32}$";
  mobilepattern!: "^[0-9]{10,10}$";
  bankaccountpattern!: "^[0-9]{14,14}$";
  ifsccodepattern!: "^[a-zA-Z0-9]{11,12}$"

  ngOnInit(): void {
    this.firstform = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern(this.namepattern)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailpattern)]),
      fname: new FormControl('', [Validators.required, Validators.pattern(this.fnamepattern)]),
      mname: new FormControl('', [Validators.required, Validators.pattern(this.mnamepattern)]),
      date: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(this.mobilepattern)]),
    });

    this.secondform = this.fb.group({
      name1: new FormControl('', [Validators.required, Validators.pattern(this.namepattern)]),
      bankaccountno: new FormControl('', [Validators.required, Validators.pattern(this.bankaccountpattern)]),
      bankname: new FormControl('', [Validators.required, Validators.pattern(this.namepattern)]),
      ifsccode: new FormControl('', [Validators.required, Validators.pattern(this.ifsccodepattern)]),
      internetbanking: new FormControl('', [Validators.required]),
      mobilebanking: new FormControl('', [Validators.required]),
    });
    this.thirdform = this.fb.group({
      presentaddress: new FormControl('', [Validators.required]),
      permanentaddress: new FormControl('', [Validators.required])
    })
  }

  public myError = (controlName: string, errorName: string) => {
    return this.firstform.controls[controlName].hasError(errorName);
  }
  public myError1 = (controlName: string, errorName: string) => {
    return this.secondform.controls[controlName].hasError(errorName);
  }

  onsubmit() {
    if ((this.firstform.valid) && (this.thirdform.valid)) {
      console.log("HHHHHHHHHHHHHHHHHH");
      this.data.name = this.firstform.value.name;
      this.data.email = this.firstform.value.email;
      this.data.fname = this.firstform.value.fname;
      this.data.mname = this.firstform.value.mname;
      this.data.date = this.firstform.value.date;
      this.data.gender = this.firstform.value.gender;
      this.data.mobile = this.firstform.value.mobile;
      this.data.name1 = this.secondform.value.name1;
      this.data.bankaccountno = this.secondform.value.bankaccountno;
      this.data.bankname = this.secondform.value.bankname;
      this.data.ifsccode = this.secondform.value.ifsccode;
      this.data.mobilebanking = this.secondform.value.mobilebanking;
      this.data.internetbanking = this.secondform.value.internetbanking;
      this.data.presentaddress = this.thirdform.value.presentaddress;
      this.data.permanentaddress = this.thirdform.value.permanentaddress;
      console.log(this.data);
      this.cs.SaveInfo(this.data).subscribe();
      this.router.navigate([""]);


      //this.cs.Save(this.data[0]).subscribe();

      //window.location.reload();
    }


  }

}
