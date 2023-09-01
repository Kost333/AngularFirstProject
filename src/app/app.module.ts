import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { FirstComponent } from "./content/first/first.component";
import { SecondComponent } from "./content/second/second.component";
import { ThirdComponent } from "./content/third/third.component";
import { FourthComponent } from "./content/fourth/fourth.component";
import { FiveComponent } from "./content/five/five.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FiveComponent
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
