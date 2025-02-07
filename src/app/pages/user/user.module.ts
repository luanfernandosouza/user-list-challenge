import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserListComponent } from 'src/app/components/user-list/user-list.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserComponent, 
    UserListComponent
  ]
})
export class UserModule { }