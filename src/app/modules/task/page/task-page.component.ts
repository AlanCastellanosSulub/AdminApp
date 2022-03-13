import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit, OnDestroy {

  groups: Array<any> = [];
  groups$ = this.taskService.getTask();
  listaObservables$: Array<Subscription> = [];



  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

    /*this.taskService.getTask()
      .subscribe((response) => {
        const { data } = response;
        this.groups = data;
        console.log(response)
      })*/
  }

  ngOnDestroy(): void {
    console.log('Me voy a destruir')
    this.listaObservables$.forEach((subscriptions) => subscriptions.unsubscribe())
  }

}
