import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit,OnDestroy {

  groups:Array<any> = [];
  listaObservables$:Array<Subscription>=[];

  

  constructor() { }

  ngOnInit(): void {

    const observer1$ =interval(1000).subscribe((res)=>{
      console.log('ZwZ Llamando')
    })

    this.listaObservables$=[observer1$];

    this.groups = [
      {
        label: 'Nuevas Tareas',
        color: 'green',
        list: [
          {
            order: 'Como instalar Angular',
            items: [
              {
                key:'price',
                value: 152
              },
              {
                key:'time',
                value: 152
              },
              {
                key:'author',
                value: {
                  name: 'Leifer Mendez',
                  avatar: ''
                }  
              }
            ]
          },
          {
            order: 'Instalar Node',
            items: [
              {
                key:'price',
                value: 152
              },
              {
                key:'time',
                value: 152
              },
              {
                key:'author',
                value: {
                  name: 'Leifer Mendez',
                  avatar: ''
                }  
              }
            ]
          }
        ]
      },
      {
        label: 'Trabajando',
        color: 'green',
        list: [
          {
            order: 'Como instalar Angular',
            items: [
              {
                key:'price',
                value: 152
              },
              {
                key:'time',
                value: 152
              },
              {
                key:'author',
                value: {
                  name: 'Leifer Mendez',
                  avatar: ''
                }  
              }
            ]
          }
        ]
      }
    ]

    //console.log(this.groups)
  }

  ngOnDestroy(): void {
    console.log('Me voy a destruir')
    this.listaObservables$.forEach((subscriptions)=>subscriptions.unsubscribe())
  }

}
