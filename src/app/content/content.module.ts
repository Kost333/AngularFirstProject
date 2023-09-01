import {NgModule} from "@angular/core";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {FourthComponent} from "./fourth/fourth.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";3
import {CommonModule} from "@angular/common";
import {AppComponent} from "../app.component";
import { FiveComponent } from './five/five.component';

@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [CommonModule]
  ],
  bootstrap: [AppComponent]
})

export class ContentModule { }
