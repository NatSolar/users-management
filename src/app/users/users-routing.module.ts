import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  { path: '', component: UserListComponent},
  { path: 'user-add', component: UserAddComponent},
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
