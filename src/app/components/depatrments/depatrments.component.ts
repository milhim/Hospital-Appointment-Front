import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/Department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-depatrments',
  templateUrl: './depatrments.component.html',
  styleUrls: ['./depatrments.component.css']
})
export class DepatrmentsComponent implements OnInit {
  departments:any;
  constructor(
    private departmenService:DepartmentService,
    private router:Router,

  ) { }

  ngOnInit(): void {
    this.departmenService.getDepartments().subscribe(
      departments=>this.departments=departments
    );
  }
  showAppointments(department:Department){
    this.router.navigate([`/appointments/${department.name}`]);
  }

}
