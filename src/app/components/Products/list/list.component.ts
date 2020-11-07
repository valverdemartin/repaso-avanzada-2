import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productList : Array<any> = new Array<any>();

  constructor(private productsService : ProductsService) { }

  list: Array<string> = ["1", "2", "3"];

  ngOnInit(): void {
    this.onGetProducts()
    this.list;
  }
  
  onGetProducts(){
    
    this.productsService.getAll().then(
      response =>{
        console.log(response)
        this.productList = response;
        console.log(this.productList)
      }
    )
  }
}
