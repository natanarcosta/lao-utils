import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranquilComponent } from './tranquil.component';

const routes: Routes = [
  {
    path: '',
    component: TranquilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranquilRoutingModule {}
