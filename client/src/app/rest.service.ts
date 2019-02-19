import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }

  private endpoint = 'http://localhost:3200/api/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAllBooks(): Observable<any> {
    return this.http.get(this.endpoint + 'books/all', this.httpOptions).pipe(map(this.extractData));
  }
}
