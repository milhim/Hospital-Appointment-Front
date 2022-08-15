import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/Appointment';
import { Department } from '../models/Department';

const url = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(
    private http: HttpClient,

  ) { }

  //department appointment

  getDepartmentAppointment(dept_name:any):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${url}/appointments/${dept_name}`);
  }

  //admin methods
  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${url}/admin/appointments`)
  }
  getAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.get<Appointment>(`${url}/admin/appointments/${appointment.id}`)
  }
  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${url}/admin/appointments`, appointment);
  }
  updateAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(`${url}/admin/appointments/${appointment.id}`, appointment);
  }
  removeAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.delete<Appointment>(`${url}/admin/appointments/${appointment.id}`);
  }
}
