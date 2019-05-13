import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(
    private userService: UserService,
    private router: Router
  ) {
   }

  ngOnInit() {
    this.userService.getUsers().subscribe( (users: User[]) => {
      this.users = users;
    });
  }

  editUser(userId){
    this.router.navigate(['user/edit-user'], { queryParams: { userId: userId } });
  }

  deleteUser(userId){
    this.userService.deleteUser(userId).subscribe( () => {
      const userIndex = this.users.findIndex( (user) => user.id === userId);
      this.users.splice(userIndex, 1);
    });
  }
}
