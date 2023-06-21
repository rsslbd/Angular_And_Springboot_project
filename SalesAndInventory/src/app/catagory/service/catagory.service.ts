import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Catagory } from './catagory';


@Injectable({
  providedIn: 'root'
})
export class CatagoryService {

  private url = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpService: HttpClient) { }
  getTask(): Observable<Catagory[]> {
    const tasks = this.httpService.get<Catagory[]>(this.url + '/catagory').pipe(
      catchError(this.errorHandler)
    )
    
    return tasks;
  }
  addTask(task: Catagory) {
    return this.httpService.post(this.url + '/catagory', task)
  }
  delete(id:number){
    return this.httpService.delete(this.url + '/catagory/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id:number):Observable<any> {

    return this.httpService.get(this.url + '/catagory/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:number,task: Catagory) {
    return this.httpService.put<Catagory>(this.url + '/catagory', task).pipe(
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


