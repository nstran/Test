import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-toggle',
    template : `<div class="toggle">Toggle</div>`
})
export class ToggleComponent {
   @Input() isChecked : boolean = false;

    constructor() {
    }

    toggle(event: any){
        // console.log(event)
    }
}