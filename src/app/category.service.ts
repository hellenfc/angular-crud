import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.apiUrl;

  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${this.apiUrl}/category`);
  }

  getCategory(categoryId){
    return this.http.get(`${this.apiUrl}/category/${categoryId}`);
  }

  addCategory(data) {
    return this.http.post(`${this.apiUrl}/category`, data);
  }

  editCategory(data){
    return this.http.put(`${this.apiUrl}/category/${data.id}`, data);
  }

  deleteCategory(categoryId){
    return this.http.delete(`${this.apiUrl}/category/${categoryId}`);
  }
}
