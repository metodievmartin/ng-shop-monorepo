import { Component, OnInit } from '@angular/core';

import { CategoriesService, Category, Product, ProductsService } from '@libs/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  isCategoryPage = false;

  constructor(
    private productService: ProductsService,
    private categoryService: CategoriesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.isCategoryPage = !!params.categoryId;

      params.categoryId
        ? this._getProducts([params.categoryId])
        : this._getProducts();
    });

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
