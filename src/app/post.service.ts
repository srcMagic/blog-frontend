import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './model/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private myUrl = 'http://localhost:8080/post';

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.myUrl + '/all');
  }

  addPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.myUrl + '/create', post);
  }
}
