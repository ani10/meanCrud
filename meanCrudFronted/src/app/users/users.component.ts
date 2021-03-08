import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';
import { IUsers } from "../models/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private _appservice: AppService) { }

  users: IUsers[] = [];

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this._appservice.getAllUsers().subscribe(
      (userList) => {
        this.users = userList
      },
      (err) => console.log(err)
    );
    console.log(this.users)
  }

  delete(id) {
    this._appservice.deleteUser(id).subscribe(
      (deletedUser) => console.log(deletedUser)
    );
    this.initialize();
  }
}
