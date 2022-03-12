import { AfterContentInit, AfterViewChecked, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, DoCheck, OnChanges,
AfterViewChecked, AfterContentInit {
  @ViewChildren('refId') elemantRefId:ElementRef=new ElementRef('');
  @Input() idOrder:string | number = 0;
  @Input() items:Array<any> = [];

  constructor() { }
  
  ngAfterContentInit(): void {
    
  }

  ngOnInit(): void {
    //console.log(this.items)
    
  }

  ngDoCheck(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    
  }

  ngAfterViewChecked(): void {
    
  }

}
