import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAppointmentsComponent } from './components/admin/admin-appointments/admin-appointments.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { DepatrmentsComponent } from './components/depatrments/depatrments.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'home', component: DepatrmentsComponent },
  { path: 'appointments/:dept_name', component: AppointmentsComponent },

  //admin routes
  { path: 'admin/appointments', component: AdminAppointmentsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
