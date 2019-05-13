import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private data: DataService,
  ) { 
    
  }

  ngOnInit() {
    this.data.changeTitle("Users")

  }

}
