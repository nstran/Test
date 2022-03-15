import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.scss']
})
export class NgtemplateComponent implements OnInit {
  counter : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
