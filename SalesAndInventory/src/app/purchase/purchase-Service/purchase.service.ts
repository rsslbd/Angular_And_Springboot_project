import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private url = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpService: HttpClient) { }
  getTask(): Observable<Purchase[]> {
    const tasks = this.httpService.get<Purchase[]>(this.url + '/purchase').pipe(
      catchError(this.errorHandler)
    )
    
    return tasks;
  }
  addTask(task: Purchase) {
    return this.httpService.post(this.url + '/purchase', task)
  }
  delete(id:number){
    return this.httpService.delete(this.url + '/purchase/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id:number):Observable<any> {

    return this.httpService.get(this.url + '/purchase/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:number,task: Purchase) {
    return this.httpService.put<Purchase>(this.url + '/purchase', task).pipe(
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
