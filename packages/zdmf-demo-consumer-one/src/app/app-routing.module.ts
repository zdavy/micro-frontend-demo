import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumerComponent } from './consumer.component';

const routes: Routes = [
  { path: '', redirectTo: 'consumer2', pathMatch: 'full' },
  { path: 'consumer2', component: ConsumerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
