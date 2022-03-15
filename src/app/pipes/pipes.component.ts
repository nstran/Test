import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-pipes',
  template :`
    <div>===================================================</div>
    <div class="pipe" *ngFor="let user of users | isAdult">
    <!-- ngNonBindable  không binding data -->
      <span >{{user.name}} - {{user.age}}</span>
    </div>

    <button (click)="click()">Click Test</button>
  `
})
export class PipesComponent {

  users : User[] = [
    {
      name : "A",
      age : 21
    },
    {
      name : "B",
      age : 22
    },
    {
      name : "C",
      age : 19
    }
  ];

  constructor() { }

  callback(name : string) : string{
    // console.log(name)
    return name;
  }

  // test() : string{
  //   return this.callback('test')
  // }

  click(){
    // this.callback(this.test())
  }


  outerFn(){
    let a = "hello";
  
    function innerFn(){
      // console.log(a);
    }
  
    innerFn(); // will log a
  }

    ngOnInit(): void {
      this.outerFn()
    }
}
