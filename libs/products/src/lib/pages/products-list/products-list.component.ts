import { Component, OnInit } from '@angular/core';

import { CategoriesService, Category, Product, ProductsService } from '@libs/products';

@Component({
  selector: 'products-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];

  constructor(
    private productService: ProductsService,
    private categoryService: CategoriesService
  ) {
  }

  ngOnInit(): void {
    this._getProducts();
    this._getCategories();
  }

  private _getProducts(categoriesFilter?: string[]) {
    this.productService.getProducts(categoriesFilter)
      .subscribe(prods => this.products = prods);
  }

  private _getCategories() {
    this.categoryService.getCategories()
      .subscribe(cats => this.categories = cats);
  }

  categoryFilter() {
    const selectedCategoriesIds = this.categories
      .filter(category => category.checked)
      .map(category => category._id || '');

    this._getProducts(selectedCategoriesIds);
  }
}
