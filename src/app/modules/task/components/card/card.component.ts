import { AfterContentInit, AfterViewChecked, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChildren } from '@angular/core';
import { TestCourseService } from '@shared/services/test-course.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @ViewChildren('refId') elemantRefId:ElementRef=new ElementRef('');
  @Input() idOrder:string | number = 0;
  @Input() items:Array<any> = [];

  constructor(private testCourseService:TestCourseService) { }

  ngOnInit(): void {
    //console.log(this.items)
    
  }


  sendData():void{
    this.testCourseService.setData('Hola desde card 😉')
  }

}
