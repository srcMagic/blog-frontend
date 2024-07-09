import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { PostFormComponent } from './post-form/post-form.component';
import { CategorieComponent } from './categorie/categorie.component';

export const routes: Routes = [
  { path: 'lista-post', component: PostListComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'home', component: HomeComponent },
  { path: 'post-form', component: PostFormComponent },
];
