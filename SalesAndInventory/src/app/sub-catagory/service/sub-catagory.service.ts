import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCatagory } from './subCatagory';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCatagoryService{
  private url = 'http://localhost:8080/api';
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

constructor(private httpService: HttpClient) { }
getTask(): Observable<SubCatagory[]> {
  const tasks = this.httpService.get<SubCatagory[]>(this.url + '/sub_catagory').pipe(
    catchError(this.errorHandler)
  )
  
  return tasks;
}
addTask(task: SubCatagory) {
  return this.httpService.post(this.url + '/sub_catagory', task)
}
delete(id:number){
  return this.httpService.delete(this.url + '/sub_catagory/' + id, this.httpOptions)

  .pipe(
    catchError(this.errorHandler)
  )
}
find(id:number):Observable<any> {

  return this.httpService.get(this.url + '/sub_catagory/' + id)

  .pipe(
    catchError(this.errorHandler)
  )
}
update(id:number,task: SubCatagory) {
  return this.httpService.put<SubCatagory>(this.url + '/sub_catagory', task).pipe(
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


