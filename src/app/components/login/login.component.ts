import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      // id: [],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value)
      .subscribe( data => {
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userData', JSON.stringify(data))
        this.router.navigate(['']);
      });
    }
  }
  get f() { return this.loginForm.controls; }


}
