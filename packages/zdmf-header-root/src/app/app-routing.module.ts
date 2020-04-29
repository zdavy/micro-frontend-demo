import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NullComponent } from './null.component';

const routes: Routes = [
  { path: '**', component: NullComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
