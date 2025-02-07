import { Component, OnInit } from '@angular/core';
import { UserlistService } from 'src/services/user-list/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList = [
    {
      name: 'Luan Fernando',
      email: 'luann_nill@hotmail.com'
    },
    {
      name: 'Test user 2',
      email: 'luann_nill@gmail.com'
    },
  ]

  constructor(
    private userlistService: UserlistService
  ) { }

  ngOnInit() {
    this.userlistService.getUserList().subscribe(
      (response: any) => {
        this.userList = response.data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }




}
