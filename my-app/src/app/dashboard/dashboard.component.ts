import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // methode 1
  constructor(public userService : UserService) { }
   // methode 2
 // constructor(@Inject("UserService") public userService : UserService) { }

  // methode 2
  // public userService : UserService
  // constructor(userService : UserService) {
  //   this.userService = userService;
  //  }

  ngOnInit(): void {
  }

}
