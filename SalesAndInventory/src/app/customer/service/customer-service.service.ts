import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private url = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpService: HttpClient) { }
  getTask(): Observable<Customer[]> {
    const tasks = this.httpService.get<Customer[]>(this.url + '/customer').pipe(
      catchError(this.errorHandler)
    )
    
    return tasks;
  }
  addTask(task: Customer) {
    return this.httpService.post(this.url + '/customer', task)
  }
  delete(id:number){
    return this.httpService.delete(this.url + '/customer/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id:number):Observable<any> {

    return this.httpService.get(this.url + '/customer/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:number,task: Customer) {
    return this.httpService.put<Customer>(this.url + '/customer', task).pipe(
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

