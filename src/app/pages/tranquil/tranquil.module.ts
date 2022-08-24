import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranquilComponent } from './tranquil.component';
import { TranquilRoutingModule } from './tranquil-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [TranquilComponent],
  imports: [CommonModule, TranquilRoutingModule, DragDropModule],
})
export class TranquilModule {}
