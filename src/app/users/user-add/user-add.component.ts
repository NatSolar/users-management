import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  user : User = { firstName: '', lastName: '', age: 0, occupation: '', useYn: true }

  constructor(private userService: UserService, private location: Location) { }

  onSubmit(userForm : any){
    this.user = userForm.value
    this.userService.addUser(this.user).subscribe({
      next: () => {
        userForm.resetForm()
      },
      error: err => {
        console.warn('Error: ', err)
      } 
    })
  }

  goBack() : void{
    this.location.back();
  }

}
