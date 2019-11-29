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
  }

  updateEndStatus(task: Task)  {
    task.endTaskStatus = true;
    console.log("Inside Add Component. Data is "+ JSON.stringify(task));
    this.taskservice.updateEndStatus(task).subscribe();;
  }


}
