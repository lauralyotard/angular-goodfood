import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class Service {
  constructor(private http: HttpClient) { }
  options: {
    headers?: HttpHeaders | { [header: string]: string | string[]; };
    observe?: 'body' | 'events' | 'response';
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; };
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
  } | undefined

  _basePath = 'http://ec2-13-36-101-31.eu-west-3.compute.amazonaws.com';
  basePath = 'http://localhost:8000';

  getPizzas(idRestaurant: number): Observable<object> {
    return this.http.get(`${this.basePath}/restaurant/${idRestaurant}/pizzas`);
  }

  login(email: string, password: string): Observable<object> {
    return this.http.post(`${this.basePath}/users/login`, {
      email, password
    });
  }
}
