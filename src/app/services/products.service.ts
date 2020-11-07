import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl = environment.urlApi+'Product';
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtbW9xdWluMUBlbmdhZGdldC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTWFyY2VsaWEgTW9xdWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJqdGkiOiI3ZDJlYWU5MS0yOGM4LTQ1MzgtYTg0Mi1hYzAyYWI3MzI4YmYiLCJleHAiOjE2MDQ3ODM0MzYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDEvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMS8ifQ.yW5AtqI7HSeacvO4aO1zavmwcMmnnxRcDYX9niugdew"
  header = new HttpHeaders().append('Authorization', 'Bearer '+this.token)

  constructor(private http: HttpClient){  };
  
  getAll(): Promise<any>{
    return this.http.get(this.productUrl, {headers: this.header})
    .toPromise();
  }

  getById(productId): Promise<any>{
    return this.http.get(this.productUrl+productId)
    .toPromise()
  }

  add(product): Promise<any>{
    return this.http.post(this.productUrl, product)
    .toPromise()
  }

  edit(product): Promise<any>{
    return this.http.put(this.productUrl, product)
    .toPromise()
  }

  delete(productId): Promise<any>{
    return this.http.delete(this.productUrl+productId)
    .toPromise()
  }
  
}
