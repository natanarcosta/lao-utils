import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.scss'],
})
export class AddCharactersComponent implements OnInit {
  form = new FormGroup({
    characters: new FormControl('', Validators.required),
  });

  constructor(
    private readonly dialogRef: MatDialogRef<AddCharactersComponent>
  ) {}

  ngOnInit(): void {}

  save() {
    this.dialogRef.close(this.form.controls.characters.value);
  }
}
