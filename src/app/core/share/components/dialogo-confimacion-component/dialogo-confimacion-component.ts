import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-confimacion-component',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialogo-confimacion-component.html',
  styleUrl: './dialogo-confimacion-component.css',
})
export class DialogoConfimacionComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogoConfimacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  close(result: boolean) {
    this.dialogRef.close(result);
  }
}
