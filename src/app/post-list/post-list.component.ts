import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  posts: any[] = [];

  constructor(private PostService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.PostService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
