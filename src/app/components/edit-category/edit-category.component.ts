import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/category.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  categoryId: number;
  editForm: FormGroup;
  submitted: boolean = false;
  category: Category; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.data.changeTitle("Edit Category")

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });

    this.route.queryParams
      .subscribe(params => {
        let categoryId = params['categoryId'];
        if (!categoryId) {
          this.router.navigate(['category']);
        }
        this.categoryId = categoryId;
        this.categoryService.getCategory(categoryId).subscribe( (category: Category) => {
          this.editForm.patchValue(category);
        })
      });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.editForm.valid){
      this.categoryService.editCategory(this.editForm.value)
      .subscribe( data => {
        this.router.navigate(['category']);
      });
    }
  }

  get f() { return this.editForm.controls; }


}
