import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  onAddUser() {
    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
    this.dialogRef.close(newUser);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
