import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCharactersComponent } from './add-characters.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddCharactersComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
})
export class AddCharactersModule {}
