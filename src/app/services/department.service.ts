import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/Department';

const url = 'http://127.0.0.1:8000/api';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private http:HttpClient,

  ) { }
  getDepartments(): Observable<Department>{
    return this.http.get<Department>(`${url}/departments`);
  }
}
