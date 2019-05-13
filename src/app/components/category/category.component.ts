import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private data: DataService,
    public user: UserService,

  ) { }

  ngOnInit() {
    this.data.changeTitle("Categories")

  }

}
