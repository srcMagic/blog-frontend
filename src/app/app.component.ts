import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    PostListComponent,
    RouterLink,
    FormsModule,
    PostFormComponent,
    FormsModule,
  ],
})
export class AppComponent {
  title = 'blog-frontend';
}
