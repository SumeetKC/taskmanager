import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient ) { }

  private apiUrl: string = "http://localhost:8080/taskmanager";

  addOrUpdateTask(task: Task): void
  {
    console.log("Inside Service. The Data to be sent is "+ JSON.stringify(task));
    this.http.post<Task>(this.apiUrl, task);
  }
}
