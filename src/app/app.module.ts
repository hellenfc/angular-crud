import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PostService } from './post.service';
import { PostsListsComponent } from './components/posts-lists/posts-lists.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { UserListComponent } from './components//user-list/user-list.component';
import { AddUserComponent } from './components//add-user/add-user.component';
import { UsersComponent } from './components//users/users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './login-guard';
import { AdminGuard } from './admin-guard';
import { EditorGuard } from './editor-guard';
import { ViewerGuard } from './viewer-guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostsListsComponent,
    AddPostComponent,
    EditPostComponent,
    UserListComponent,
    AddUserComponent,
    UsersComponent,
    EditUserComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    CategoryListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    LoginGuard,
    AdminGuard,
    EditorGuard,
    ViewerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
