import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private appservice: AppService) { }

  usersArray = [];

  ngOnInit() {
    this.appservice.getAllUsers().subscribe((users)=>{
      console.log(users);
    });
  }
}
