import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Department } from 'src/app/models/Department';

@Component({
  selector: 'app-department-card',
  templateUrl: './department-card.component.html',
  styleUrls: ['./department-card.component.css']
})
export class DepartmentCardComponent implements OnInit {

  @Input() department!:Department;
  @Output() showAppointment=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onShowAppointmentClick(){
    this.showAppointment.emit();
  }

}
