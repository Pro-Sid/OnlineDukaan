import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public valid: boolean;
  public errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private loginServ: LoginServiceService) { }

  ngOnInit(): void {
    this.valid = false;
    this.errorMessage = "";
    this.loginForm = this.fb.group({
      username: [""],
      password: [""]
    })
  }

  login(){

    if(this.loginForm.value.username ==="" || this.loginForm.value.password === ""){
      this.valid = false;
      this.errorMessage = "Please enter credentials";
    }

    else{
      this.loginServ.loginUser(this.loginForm.value).subscribe(
        (response) =>{
          this.valid = true;
          this.errorMessage = "";
          var user = this.loginForm.value.username;
          sessionStorage.setItem("user", user);
          this.router.navigate["/home"];
        },
        (errorResponse) => {
          this.valid = false;
          this.errorMessage = errorResponse.error.message;
          sessionStorage.clear();
        }
      )
    }
  }

}
