import { Category } from './category.model';

export interface Post {
  id?: number;
  title?: string;
  content?: string;
  author?: string;
  createdAt?: string;
  category?: Category[];
}
