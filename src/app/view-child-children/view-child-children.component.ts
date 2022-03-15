import { Component, ElementRef, QueryList, VERSION, ViewChild, ViewChildren } from '@angular/core';
import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'app-view-child-children',
  templateUrl: './view-child-children.component.html'
})
export class ViewChildChildrenComponent {

  // <!-- static true thì được sử dụng trong ngOninit false thì chỉ được sử dụng trong ngViewAfterInit -->
  
  @ViewChild(ToggleComponent) toggleComp!: ToggleComponent;
  // ElementRef same query selector 

  @ViewChild('buttonToggle') buttonToggle! : ElementRef<HTMLElement>;

  @ViewChildren(ToggleComponent) toggleComponent! : QueryList<ToggleComponent>;

  name = "Angular" + VERSION.major;

  isChecked : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.buttonToggle)  
    this.buttonToggle.nativeElement.click()

    // this.toggleComponent.changes.subscribe(console.log)
  }
}
