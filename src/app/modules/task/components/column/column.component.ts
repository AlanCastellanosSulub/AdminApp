import { Component, Input, OnInit } from '@angular/core';
import { ColumnService } from '@modules/task/services/column.service';
import { NewTaskService } from '@modules/task/services/new-task.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit{
  @Input() data:Array<any>=[];
  @Input() name!:string;
  @Input() id:string;

  constructor(private newTaskService:NewTaskService, private columnService:ColumnService) { }


  ngOnInit(): void {
    //console.log(this.data)
    this.columnService.reloadColumn$
    .subscribe((response) => {
      if(response && response?.data?._id === this.id){
        const {data} = response;
        this.data = data.list
        console.log('--->',response)
      }
    })
  }

  addTask():void{
    this.newTaskService.setShow(true,this.id)
  }

}
