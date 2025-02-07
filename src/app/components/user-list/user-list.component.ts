import { Component, OnInit } from '@angular/core';
import { UserlistService } from 'src/services/user-list/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userMockData = [
    {
      name: 'Luan Fernando',
      email: 'luann_nill@hotmail.com'
    },
    {
      name: 'Richard Cancino',
      email: 'richard.cancino@tallertechnologies.net'
    },
    {
      name: 'Rodrigo Alisio',
      email: 'rodrigo.alisio@tallertechnologies.net'
    },
  ]

  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';

  constructor(
    private userlistService: UserlistService
  ) { }

  ngOnInit() {
    this.users = this.userMockData;
    this.filteredUsers = this.userMockData;

    this.userlistService.getUserList().subscribe(
      (data: any) => {
        //For usinf after provide a api return data with Email and name
        /*this.users = data;
        this.filteredUsers = data;*/

        this.users = this.userMockData;
        this.filteredUsers = this.userMockData;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
