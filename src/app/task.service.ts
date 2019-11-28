import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient ) { }

  private apiUrl = 'http://localhost:8080/v1';


  addOrUpdateTask(task: Task): void {
    console.log('Inside Service. The Data to be sent is ' + JSON.stringify(task));
    this.http.post<Task>(this.apiUrl + '/addtask', task);
  }

  updateTask(task: Task): void {
    console.log('Inside Service. The Data to be sent is ' + JSON.stringify(task));
    this.http.post<Task>(this.apiUrl + '/updatetask', task);
  }

 // Read all REST Items
 viewTask() {
  return this.http.get<any[]>(this.apiUrl + '/tasks').pipe(map(data => data));
      }

  updateEndStatus(task: Task)  {
    this.http.post<Task>(this.apiUrl + '/updateendstatus', task);
  }
}
