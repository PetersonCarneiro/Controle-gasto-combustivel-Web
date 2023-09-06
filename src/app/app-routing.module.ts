
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { CalcComponent } from './calc/calc.component';

const routes: Routes = [
  {path:'', component: IntroComponent},
  {path:'calc',component: CalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
