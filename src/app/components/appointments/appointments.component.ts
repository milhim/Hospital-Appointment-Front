import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments!: Appointment[];
  constructor(
    private appointmentService: AppointmentsService,
    private route: ActivatedRoute,


  ) { }

  ngOnInit(): void {
    this.getAppointments();
  }
  getAppointments() {

    let urlParms = this.route.snapshot.paramMap.get('dept_name');
    this.appointmentService.getDepartmentAppointment(urlParms).subscribe(
      appointments => this.appointments = appointments
    );
  }

  bookAppointment(appointment:Appointment){
    appointment.taken=true;
    this.appointmentService.updateAppointment(appointment).subscribe();
  }
}
