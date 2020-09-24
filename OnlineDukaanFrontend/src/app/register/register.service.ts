import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(registerFormValue: any): Observable<any>{
    return this.http.post("http://localhost:3000/register", registerFormValue);
  }
}
