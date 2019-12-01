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

  task: Task = new Task();
  taskaddstatus = false;

  ngOnInit() {
  }

  addTask(task: Task): void  {
    task.endTaskStatus = false;
    this.taskservice.addTask(task).subscribe(data => { if (data) {
      this.taskaddstatus = true;
 }
    });
  }

}
