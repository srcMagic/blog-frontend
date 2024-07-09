import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './model/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private myUrl = 'http://localhost:8080/category';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.myUrl + '/all'}`);
  }
}
