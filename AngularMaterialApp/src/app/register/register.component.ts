import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceserviceService } from '../serviceservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private cs: ServiceserviceService, private router: Router) { }

  studentform!: FormGroup;

  emailpattern!: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!: "^[a-zA-Z ]{6,32}$";
  passwordpattern!: "^[a-zA-Z0-9]{6,12}$";
  mobilepattern!: "^[0-9]{10,10}$";

  ngOnInit(): void {
    this.studentform = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern(this.namepattern)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailpattern)]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passwordpattern)]),
      skill: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(this.mobilepattern)]),
    });

  }
  public myError = (controlName: string, errorName: string) => {
    return this.studentform.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.studentform.valid) {
      this.cs.Save(this.studentform.value).subscribe();
      this.router.navigate(['login']);
    }
  }

}
