import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetail } from '../userdetail';
import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  empList: Array<UserDetail> = [];
  FirstName: string;
  LastName: string;
  Email: string;
  Gender: string;
  Mobile: string;
  Password: string;
  ConfirmPassword: string;
  model: any = {};
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  alphabetsPattern = "[a-zA-Z ]*";
  passworddoesnotmatch: string;
  constructor(private formBuilder: FormBuilder, private userRegister: RegisterService, private route: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      FirstName: ['', [Validators.required, Validators.pattern(this.alphabetsPattern), Validators.minLength(3), Validators.maxLength(30)]],
      LastName: ['', [Validators.required, Validators.pattern(this.alphabetsPattern), Validators.minLength(3), Validators.maxLength(30)]],
      Email: ['', [Validators.required, Validators.pattern(this.emailPattern), Validators.minLength(10), Validators.maxLength(50)]],
      Gender: ['', Validators.required],
      Mobile: ['', [Validators.required, Validators.pattern("[0-9]{0,10}"), Validators.minLength(10), Validators.maxLength(10)]],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.controls["Password"].value != this.registerForm.controls["ConfirmPassword"].value) {
      alert("Password and Confirm password are not same.");
      return false;
    }
    else {
      this.model = this.registerForm.value;
      this.userRegister.SetData(this.model);
      this.route.navigate(['/login']);
    }
  }

  onBlur() {

  }

}
