import { Component, OnInit } from '@angular/core';

class User {
    name : string | undefined;
    age : number | undefined;
}

@Component({
  selector: 'app-ng-if-for-style-class',
  templateUrl: './ng-if-for-style-class.component.html',
  styleUrls: ['./ng-if-for-style-class.component.scss']
})

export class NgIfForStyleClassComponent implements OnInit {
  counter : number = 1;
  isRed : boolean = true;
  isYellow : boolean = false
  constructor() { }

  users : User [] = [
    {
    name : "A",
    age : 18
    },
    {
      name : "B",
      age : 19
    },
    {
      name : "C",
      age : 20
    }
  ];

  ngOnInit(): void {
  }

}
