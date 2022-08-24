import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranquilComponent } from './tranquil.component';
import { TranquilRoutingModule } from './tranquil-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TranquilComponent],
  imports: [
    CommonModule,
    TranquilRoutingModule,
    DragDropModule,
    MatExpansionModule,
    MatIconModule,
  ],
})
export class TranquilModule {}
