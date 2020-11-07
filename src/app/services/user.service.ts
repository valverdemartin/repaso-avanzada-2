import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { config } from 'process';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = environment.urlApi+'User';

  constructor(private http: HttpClient){  };
  
  getAll(): Promise<any>{
    return this.http.get(this.userUrl
  )
    .toPromise();
  }

  add(category): Promise<any>{
    return this.http.post(this.userUrl
  , category)
    .toPromise()
  }

}
