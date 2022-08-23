import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranquilComponent } from './tranquil.component';
import { TranquilRoutingModule } from './tranquil-routing.module';

@NgModule({
  declarations: [TranquilComponent],
  imports: [CommonModule, TranquilRoutingModule],
})
export class TranquilModule {}
