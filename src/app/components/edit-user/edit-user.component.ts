import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/user.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId: number;
  editForm: FormGroup;
  submitted: boolean = false;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.data.changeTitle("Edit User")

    this.editForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.route.queryParams
      .subscribe(params => {
        let userId = params['userId'];
        if (!userId) {
          this.router.navigate(['user']);
        }
        this.userId = userId;
        this.userService.getUser(userId).subscribe( (user: User) => {
          this.editForm.patchValue(user);
        })
      });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.userService.editUser(this.editForm.value)
      .subscribe( data => {
        this.router.navigate(['user']);
      });
    }
  }

  get f() { return this.editForm.controls; }


}
