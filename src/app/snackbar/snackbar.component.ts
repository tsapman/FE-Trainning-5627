import { Component, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photos } from '../photos';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  @Input() photo: Photos | undefined;
  @Input() viewModeTitle : string = '';
  public isSecondAlbum : boolean = false;
  private snackBar = inject(MatSnackBar);

  showSnackbar(message: string, action: string = 'Close', duration: number = 3800): void {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }

getImageId() {
  return String(this.photo?.id);
  }
isModeViewSecondAlbum(): boolean {
  if (this.viewModeTitle.includes('Second Album complete')) {
    this.isSecondAlbum = true;
    return this.isSecondAlbum;
  } else {
    this.isSecondAlbum = false;
    return this.isSecondAlbum;
  }

  
  }

}
