import { Injectable } from '@angular/core';
import { Supplier } from './supplier';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {

  private url = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpService: HttpClient) { }
  getTask(): Observable<Supplier[]> {
    const tasks = this.httpService.get<Supplier[]>(this.url + '/supplier').pipe(
      catchError(this.errorHandler)
    )
    
    return tasks;
  }
  addTask(task: Supplier) {
    return this.httpService.post(this.url + '/supplier', task)
  }
  delete(id:number){
    return this.httpService.delete(this.url + '/supplier/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id:number):Observable<any> {

    return this.httpService.get(this.url + '/supplier/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:number,task: Supplier) {
    return this.httpService.put<Supplier>(this.url + '/supplier', task).pipe(
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

