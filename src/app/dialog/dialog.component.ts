import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../service/data.service';
import { CommonModule } from '@angular/common';
import { Photos } from '../photos';



@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatIconModule,MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  public photos : Photos [] = [];
  public filteredPhotos : Photos [] = [];
  errorMessage = '';

  constructor(private data_service : DataService, @Inject(MAT_DIALOG_DATA) public data: Photos) {
  }

  ngOnInit(): void {
    this.data_service.getAllPhotos().subscribe({
      next: (photos : Photos[]) => {
        this.photos = photos;
        this.filteredPhotos = this.photos.filter((photo : Photos) => photo.albumId === 1);
    },
      error: (error : any) => {
        this.errorMessage = error;
        console.error('Error fetching photos:', error);
      }
    });
  }

  ngOnDestroy(): void {}

  showId(photo: Photos) {
    return photo.id;
  }
  
}
