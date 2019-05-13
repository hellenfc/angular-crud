import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from 'src/app/data.service';
import { CategoryService } from 'src/app/category.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  categories: Category[];
  addForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private data: DataService,
    private categoryService: CategoryService,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.data.changeTitle("Add Post")
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });

    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      text: ['', Validators.required],
      categories: [[], Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.postService.addPost(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['']);
      });
    }
  }

  get f() { return this.addForm.controls; }

}
