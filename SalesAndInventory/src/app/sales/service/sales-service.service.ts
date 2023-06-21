import { Injectable } from '@angular/core';
import { Sales } from './sales';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {
  private url = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpService: HttpClient) { }
  getTask(): Observable<Sales[]> {
    const tasks = this.httpService.get<Sales[]>(this.url + '/sales').pipe(
      catchError(this.errorHandler)
    )
    
    return tasks;
  }
  addTask(task: Sales) {
    return this.httpService.post(this.url + '/sales', task)
  }
  delete(id:number){
    return this.httpService.delete(this.url + '/sales/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id:number):Observable<any> {

    return this.httpService.get(this.url + '/sales/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:number,task: Sales) {
   // task.sales_id=id;
    return this.httpService.put<Sales>(this.url + '/sales', task).pipe(
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

