import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private taskservice: TaskService ) { }
  taskItems: any[];

  ngOnInit() {
    this.taskservice.viewTask().subscribe(taskItems => {this.taskItems = taskItems; });
    console.log(this.taskItems);
  }


  updateEndStatus(task: Task)  {
    task.taskEndStatus = 'true';
    this.taskservice.updateEndStatus(task);
  }

}
