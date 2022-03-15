import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-binding',
  templateUrl: './input-output-binding.component.html',
})
export class InputOutputBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getData(event: any){
    // console.log(event)
  }

}
