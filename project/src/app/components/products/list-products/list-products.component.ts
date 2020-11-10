import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  @Output()  
  selectedProductEvent = new EventEmitter<Product>();

  productList = [];
  filter : number = 0;
  categories = [1,2,3,4,5];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.onGetProducts()
  }

  onGetProducts(){
    this.productService.getAll().then(resp => this.productList = resp)
  } 
  
  selectProduct(product : Product){    
    this.productService.saveProducts(product)
  }  

}
