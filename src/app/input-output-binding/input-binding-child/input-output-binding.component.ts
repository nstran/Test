import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-binding-child',
  templateUrl: './input-output-binding-child.component.html',
})
export class InputOutputBindingChildComponent implements OnInit {
  @Input() set data(data : number){
    // Validation 
    if (typeof data == "number") {
      // console.log("this is number")
    } else {
      // console.log("not a number")
    }
  };

  @Output() childComp : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
