import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() isSignedIn!: boolean;
  constructor(
private authService:AuthService,

  ) { }
  ngOnInit(): void {
  }
  signOut() {
    this.authService.signOut();
  }

}
