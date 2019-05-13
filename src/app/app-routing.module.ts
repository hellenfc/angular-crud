import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './login-guard';
import { AdminGuard } from './admin-guard';
import { EditorGuard } from './editor-guard';
import { ViewerGuard } from './viewer-guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'add-post',
    component: AddPostComponent,
    canActivate: [LoginGuard, EditorGuard]
  },
  {
    path: 'edit-post',
    component: EditPostComponent,
    canActivate: [LoginGuard, EditorGuard]
  },
  {
    path: 'user',
    component: UsersComponent,
    canActivate: [LoginGuard, AdminGuard]
  },
  {
    path: 'user/add-user',
    component: AddUserComponent,
    canActivate: [LoginGuard, AdminGuard]
  },
  {
    path: 'user/edit-user',
    component: EditUserComponent,
    canActivate: [LoginGuard, AdminGuard]
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'category/add-category',
    component: AddCategoryComponent,
    canActivate: [LoginGuard, EditorGuard]
  },
  {
    path: 'category/edit-category',
    component: EditCategoryComponent,
    canActivate: [LoginGuard, EditorGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
