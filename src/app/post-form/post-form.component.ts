import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Post } from '../model/post.model';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
      category: [],
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const formData = this.postForm.value;
      const newPost: Post = {
        title: formData.title,
        content: formData.content,
        author: formData.author,
        category: formData.category,
      };

      this.postService.addPost(newPost).subscribe({
        next: (createdPost) => {
          console.log('Nuovo post creato:', createdPost);
          this.postForm.reset();
        },
        error: (error) => {
          console.error('Errore durante la creazione del post:', error);
        },
      });
    } else {
      console.error('Form non valido. Controlla i campi e riprova.');
    }
  }
}
