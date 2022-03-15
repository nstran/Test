import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgtemplateComponent } from './Ng-Template/ngtemplate/ngtemplate.component';
import { NgIfForStyleClassComponent } from './ng-if-for-style-class/ng-if-for-style-class.component';
import { InputOutputBindingChildComponent } from './input-output-binding/input-binding-child/input-output-binding.component';
import { InputOutputBindingComponent } from './input-output-binding/input-output-binding.component';
import { ViewChildChildrenComponent } from './view-child-children/view-child-children.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './view-child-children/toggle.component';
import { PipesComponent } from './pipes/pipes.component';
import { isAdultPipe } from './pipes/is-adult.pipe';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TestResquestComponent } from './performance/test-resquest/test-resquest.component';

@NgModule({
  declarations: [
    AppComponent,
    NgtemplateComponent,
    NgIfForStyleClassComponent,
    InputOutputBindingComponent,
    InputOutputBindingChildComponent,
    ViewChildChildrenComponent,
    ToggleComponent,
    PipesComponent,
    isAdultPipe,
    RxjsComponent,
    TestResquestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
