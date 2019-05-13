import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private data: DataService,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.data.changeTitle("Add Category")

    this.addForm = this.formBuilder.group({
      // id: [],
      name: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.categoryService.addCategory(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['category']);
      });
    }
  }
  get f() { return this.addForm.controls; }

}
