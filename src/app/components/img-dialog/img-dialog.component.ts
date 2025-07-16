import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'img-dialog',
  imports: [],
  templateUrl: './img-dialog.component.html',
  styleUrl: './img-dialog.component.css'
})
export class ImgDialogComponent {

  data = inject(DIALOG_DATA);
  #dialogRef = inject(DialogRef);

  constructor() { }

  closeDialog(): void {
    this.#dialogRef.close();
  }

}
