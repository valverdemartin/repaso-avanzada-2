import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { config } from 'process';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  userTypeUrl = environment.urlApi+'UserType';

  constructor(private http: HttpClient){  };
  
  getAll(): Promise<any>{
    return this.http.get(this.userTypeUrl)
    .toPromise();
  }

  getById(userTypeId): Promise<any>{
    return this.http.get(this.userTypeUrl+userTypeId)
    .toPromise()
  }

}
