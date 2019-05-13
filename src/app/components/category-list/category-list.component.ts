import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/models/Category';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    public user: UserService

  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe( (categories: Category[]) => {
      this.categories = categories;
    });
  }

  editCategory(categoryId){
    this.router.navigate(['category/edit-category'], { queryParams: { categoryId: categoryId } });
  }

  deleteCategory(categoryId){
    this.categoryService.deleteCategory(categoryId).subscribe( () => {
      const categoryIndex = this.categories.findIndex( (category) => category.id === categoryId);
      this.categories.splice(categoryIndex, 1);
    });
  }

}
