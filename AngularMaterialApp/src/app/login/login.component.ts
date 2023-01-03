import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceserviceService } from '../serviceservice.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Error1: string = '';
  constructor(private fb: FormBuilder, private cs: ServiceserviceService, private _http: HttpClientModule, private router: Router) { }
  loginform!: FormGroup;

  emailpattern!: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordpattern!: "^[a-zA-Z0-9]{6,12}$";

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailpattern)]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passwordpattern)])
    });
  }

  public myError = (controlName: string, errorName: string) => {
    return this.loginform.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.loginform.valid) {
      let u = this.cs.studentGetData().subscribe(res => {
        const user = res.find((a: any) => {
          return a.fname === this.loginform.value.fname && a.password === this.loginform.value.password
        });
        //console.log(user);

        if (user) {
          console.log("ssssssssssssssssssss");
          this.router.navigate(['/dashboard']);

        }
        else {

          console.log("fffffffffffffffffffffffffffffff");
          this.Error1 = 'Invalid email and password';

        }

      })
    }


  }


}


