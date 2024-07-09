import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css',
})
export class CategorieComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
