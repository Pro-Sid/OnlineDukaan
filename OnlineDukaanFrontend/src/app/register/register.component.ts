import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public valid: boolean;
  public errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private registerServ: RegisterService) { }

  ngOnInit(): void {
    this.errorMessage = "";
    this.registerForm = this.fb.group({
      username: [""],
      email: [""],
      password: [""]
    })
  }

  register(){
    this.registerServ.registerUser(this.registerForm.value).subscribe(
      (response) => {
        this.errorMessage = "";
        this.valid = true;
        console.log("User Registered Successfully");
        this.router.navigate["/home"];
      },
      (errorResponse) =>{
        this.valid = false;
        this.errorMessage = errorResponse.error.message;
        console.log("Server error");
      }

    )
  }
}
