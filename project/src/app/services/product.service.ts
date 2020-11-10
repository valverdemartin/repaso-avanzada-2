import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Product } from '../models/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = environment.urlApi+'Product';
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtbW9xdWluMUBlbmdhZGdldC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTWFyY2VsaWEgTW9xdWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJqdGkiOiIwZDYxZjdjZS0xZTkxLTQ2Y2QtYWQ4MS03Mzg0YjUwMmVlZjMiLCJleHAiOjE2MDQ4NzQ2NzYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMS8ifQ.259W9wHfY5-_iKj9LE_PNNnJESfiUrxqJs0C_qzc9e4"
  header = new HttpHeaders().append('Authorization', 'Bearer '+this.token)


  selectedProducts= []

  constructor(private http: HttpClient) { }

  getAll(): Promise<any>{
    return this.http.get(this.productUrl, {headers: this.header})
    .toPromise();
  }

  getUsers(): Promise<any>{
    return this.http.get(this.productUrl, {headers: this.header})
      .toPromise();
  }

  saveProducts(product : Product){
    this.selectedProducts.push(product)
  }

  deleteProduct(product: Product){
    this.selectedProducts.splice(this.selectedProducts.indexOf(product), 1)
  }

  getSelectedProducts(){
    return this.selectedProducts;
  }
  
}
