import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class RestaurantService {
  constructor(private http: HttpClient) { }
  options: {
    headers?: HttpHeaders | { [header: string]: string | string[]; };
    observe?: 'body' | 'events' | 'response';
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; };
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
  } | undefined

  basePath = 'http://ec2-13-36-101-31.eu-west-3.compute.amazonaws.com';

  getPizzas(idRestaurant: number): Observable<object> {
    return this.http.get(`${this.basePath}/restaurant/${idRestaurant}/pizzas`);
  }
}
