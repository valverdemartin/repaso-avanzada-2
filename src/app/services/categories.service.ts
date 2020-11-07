import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { config } from 'process';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categoriesUrl
   = environment.urlApi+'ProductCategory';

  constructor(private http: HttpClient){  };
  
  getAll(): Promise<any>{
    return this.http.get(this.categoriesUrl
      )
    .toPromise();
  }

  getById(categoryId): Promise<any>{
    return this.http.get(this.categoriesUrl
      +categoryId)
    .toPromise()
  }

  add(category): Promise<any>{
    return this.http.post(this.categoriesUrl
      , category)
    .toPromise()
  }

  edit(category): Promise<any>{
    return this.http.put(this.categoriesUrl
      , category)
    .toPromise()
  }

  delete(categoryId): Promise<any>{
    return this.http.delete(this.categoriesUrl
      +categoryId)
    .toPromise()
  }
  
}
