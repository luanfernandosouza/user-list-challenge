import { Component, OnInit } from '@angular/core';
import { UserlistService } from 'src/services/user-list/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';

  constructor(
    private userlistService: UserlistService
  ) { }

  ngOnInit() {
    this.userlistService.getUserList().subscribe(
      (data: any) => {
        this.users = data;
        this.filteredUsers = data;
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
