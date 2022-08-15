import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-admin-appointments',
  templateUrl: './admin-appointments.component.html',
  styleUrls: ['./admin-appointments.component.css']
})
export class AdminAppointmentsComponent implements OnInit {
appointments!:Appointment[];
  constructor(
   private appointmentService:AppointmentsService
  ) { }

  ngOnInit(): void {
    this.getAppointments();
  }
  getAppointments(){
    this.appointmentService.getAppointments().subscribe(appointments=>this.appointments=appointments);
  }

}
