import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Post } from './models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = environment.apiUrl;

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  // return what comes back from this http call
  getPosts() {
    return this.http.get(`${this.apiUrl}/post`);
  }

  getPost(postId){
    return this.http.get(`${this.apiUrl}/post/${postId}`);
  }

  addPost(data) {
    return this.http.post(`${this.apiUrl}/post`, data);
  }

  editPost(data){
    return this.http.put(`${this.apiUrl}/post/${data.id}`, data);
  }

  deletePost(postId){
    return this.http.delete(`${this.apiUrl}/post/${postId}`);
  }
}
