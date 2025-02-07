import { Component, OnInit } from '@angular/core';
import { UserlistService } from 'src/services/user-list/user-list.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(
    private userlistService: UserlistService
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.loading = true;
    this.userlistService.getUserList().pipe(
      tap((data: any) => {
        this.users = data;
        this.filteredUsers = data;
      }),
      catchError(err => {
        this.error = 'Failed to load users';
        this.loading = false;
        return of([]);
      })
    ).subscribe(() => {
      this.loading = false;
    });
  }

  filterUsers(): void {
    if (this.searchTerm.trim()) {
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }

}
