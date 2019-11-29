import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient ) { }

  private apiUrl = 'http://localhost:8080/v1';

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }


  addTask(task: Task): Observable<Task> {
    console.log('Inside Service. The Data to be sent is ' + JSON.stringify(task));
    return this.http.post<Task>(this.apiUrl + '/addtask', task).pipe(tap(data=>console.log(data)),catchError(this.handleError));
    
  }
   
  updateTask(task: Task): Observable<Task>{
    //const url = `${this.apiUrl + '/updatetask'}/${task.taskId}`;
    return this.http.put<Task>(this.apiUrl + '/updatetask', task).pipe(
      map(() => task),
      catchError(this.handleError)
    );
  }

 // Read all REST Items
 viewTask(): Observable<Task[]>{
  return this.http.get<Task[]>(this.apiUrl + '/tasks').pipe(map(data => data));
      }

  updateEndStatus(task: Task): Observable<Task>  {
    console.log("Inside service");
    return this.http.put<Task>(this.apiUrl + '/updateendstatus', task).pipe(
      map(() => task),
      catchError(this.handleError)
    );
  }
}
