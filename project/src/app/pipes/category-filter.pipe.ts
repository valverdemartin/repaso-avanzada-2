import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/products';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(productList: Array<Product>, categoryId: number): Array<Product> {
    var filtered = new Array<Product>();
    filtered = productList.filter(Product=>Product.productCategoryId == categoryId)
    return filtered;
  }

}
