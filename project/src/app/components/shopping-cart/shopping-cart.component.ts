import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/common/custom-validators';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  // @Input()
  // productList: Array<Product>;

  // @Output() removeProductEmitter = new EventEmitter<Product>();

  productList = []
  product = new Product();
  isBuying = false

  buyGroup: FormGroup;

  currentRoute: string = "";
  
  constructor(private router: Router, private productService: ProductService) 
  {
    this.buyGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email], [CustomValidators.emailExists(productService)]),
      name: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    console.log(this.router.url)
    this.productList = this.productService.getSelectedProducts();
  }

  removeProduct(product : Product){
    this.productService.deleteProduct(product);
  }

  onBuying() {
    this.isBuying = true
  }

}
