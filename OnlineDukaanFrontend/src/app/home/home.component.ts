import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loggedIn: boolean = false;
  public user: string;

  constructor() { }

  ngOnInit(): void {
    this.checkUser();
  }

  checkUser = () =>{
    this.user = sessionStorage.getItem("user");
    if(this.user) this.loggedIn = true
    else this.loggedIn = false
  }

  logout = () =>{
    sessionStorage.clear();
    this.loggedIn = false;
  }
}
