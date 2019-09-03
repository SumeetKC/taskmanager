import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private taskservice: TaskService) { }

  ngOnInit() {
  }

  task: Task = new Task();

  addOrUpdateTask(task: Task): void
  {
    task.taskEndStatus = 'false';
    console.log("Inside Add Component. Data is "+ JSON.stringify(task));
    this.taskservice.addOrUpdateTask(task);

  }

}
