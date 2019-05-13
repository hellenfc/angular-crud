import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private data: DataService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.data.changeTitle("Add User")

    this.addForm = this.formBuilder.group({
      // id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.userService.addUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['user']);
      });
    }
  }
  get f() { return this.addForm.controls; }


}
