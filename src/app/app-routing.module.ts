import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./content/first/first.component";
import {SecondComponent} from "./content/second/second.component";
import {ThirdComponent} from "./content/third/third.component";
import {FourthComponent} from "./content/fourth/fourth.component";
import {FiveComponent} from "./content/five/five.component";

const routes: Routes = [
  { path: '', component: FirstComponent},
  { path: 'second', component: SecondComponent},
  { path: 'third', component: ThirdComponent},
  { path: 'fourth', component: FourthComponent},
  { path: 'five', component: FiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
