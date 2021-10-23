import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '@libs/products';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'products-categories-banner',
  templateUrl: './categories-banner.component.html',
})
export class CategoriesBannerComponent implements OnInit {
  categories$!: Observable<Category[]>;

  constructor(private categoriesService: CategoriesService) {
    this.categories$ = this.categoriesService.getCategories();
  }

  ngOnInit(): void {
  }


}
