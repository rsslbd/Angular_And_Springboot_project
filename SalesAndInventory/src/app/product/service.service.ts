import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductForm } from './product';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpService: HttpClient) { }
  getTask(): Observable<ProductForm[]> {
    const tasks = this.httpService.get<ProductForm[]>(this.url + '/product').pipe(
      catchError(this.errorHandler)
    )
    
    return tasks;
  }
  addTask(task: ProductForm) {
    return this.httpService.post(this.url + '/product', task)
  }
  delete(id:number){
    return this.httpService.delete(this.url + '/product/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id:number):Observable<any> {

    return this.httpService.get(this.url + '/product/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:number,task: ProductForm) {
    return this.httpService.put<ProductForm>(this.url + '/product', task).pipe(
      catchError(this.errorHandler)
    )
    
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}


