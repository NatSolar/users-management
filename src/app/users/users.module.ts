import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserAddComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    UsersRoutingModule
  ]
})
export class OwnersModule { }
