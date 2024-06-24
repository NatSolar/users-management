import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []

  @Output() emitService = new EventEmitter();

  constructor(private usersService: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe({
      next: data => this.users = data,
      error: err => console.warn('Error: ', err)
      })
  }

  editUser(user:User){
    this.emitService.next(user)
    this.modalService.dismissAll()
  }

  deleteUser(user:User){
    user.useYn = false;
    this.usersService.deleteUser(user.id!, user).subscribe({
      complete: () => {
        this.usersService.getAll().subscribe(data => this.users = data.sort((a, b) => a.id! - b.id!))
      }
    })
  }

}
