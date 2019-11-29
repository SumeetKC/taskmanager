import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private taskservice: TaskService) { }

  ngOnInit() {
  }

  task: Task = new Task();

  updateTask(task: Task): void
  {
    task.endTaskStatus = false;
    console.log("Inside Update Component. Data is "+ JSON.stringify(task));
    this.taskservice.updateTask(task).subscribe(data => this.task = data);

  }

}
