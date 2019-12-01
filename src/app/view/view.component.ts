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
  taskName: string;
  parentTask: string;
  priority: number;
  startDate: string;
  endDate: Date;

  ngOnInit() {
    this.taskservice.viewTask().subscribe(taskItems => {this.taskItems = taskItems; });
  }

  updateEndStatus(task: Task)  {
    this.taskservice.updateEndStatus(task).subscribe(data => {
      if (data) {
        this.ngOnInit();
      }
    });
  }


}
