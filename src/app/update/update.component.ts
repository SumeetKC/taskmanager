import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private taskservice: TaskService, private route: ActivatedRoute, private router: Router) { }

  task: Task = new Task();
  id: number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

    this.taskservice.getTask(this.id).subscribe(task => {this.task = task; });
  }

updateTask(task: Task) {
    task.endTaskStatus = false;
    this.taskservice.updateTask(task).subscribe(data => {if (data) {
      this.task = data;
      this.router.navigateByUrl('/app-view');
      }
    });
  }

}

