import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private data: DataService,
    private user: UserService,
  ) { }

  ngOnInit() {
    this.data.changeTitle("Login")
  }

  signout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    this.router.navigate(['login']);
  }

}
