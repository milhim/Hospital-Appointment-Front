import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthStateService } from './auth-state.service';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
// User interface
const url = 'http://127.0.0.1:8000/api';
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService
    ) { }
  // User registration
  register(user: User): Observable<User> {
    return this.http.post<User>(`${url}/register`, user);
  }
  // Login
  signin(user: User): Observable<User> {
    return this.http.post<User>(`${url}/login`, user);
  }
  // Access user profile
  profileUser(): Observable<User> {
    return this.http.get<User>(`${url}/user-profile`);
  }
  signOut() {
    console.log('before')
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
    console.log('after')

  }
}