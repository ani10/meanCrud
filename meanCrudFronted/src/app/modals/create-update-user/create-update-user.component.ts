import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AppService } from 'src/app/app-service.service';
import { IUsers } from 'src/app/models/user.interface';

@Component({
  selector: 'app-create-update-user',
  templateUrl: './create-update-user.component.html',
  styleUrls: ['./create-update-user.component.scss']
})
export class CreateUpdateUserComponent implements OnInit {

  userForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    phoneNumber: ['']
  })
  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit() {
  }

  onSubmit(formData: IUsers) {
    let payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber
    }
    this.appService.createUser(payload).subscribe((res => console.log(res)));
    this.appService.getAllUsers().subscribe(res=>console.log(res));
  }

}
