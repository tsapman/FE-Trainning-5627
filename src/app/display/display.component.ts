import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';
import { Photos } from '../photos';
import { ImagesComponent } from '../images/images.component'; 
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule,ImagesComponent,SnackbarComponent],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  photos: Photos[] = [];
  filteredPhotos: Photos[] = []; 
  errorMessage: string = '';

  constructor(private data_service: DataService, private snackBar : MatSnackBar ) {}

  ngOnInit() {
    this.data_service.getAllPhotos().subscribe({
      next: (photos) => {
        this.photos = photos;
        this.showAllPhotos();
      },
      error: (error) => {
        this.errorMessage = error;
        console.error('Error fetching photos:', error);
      },
    });
  }

  filterPhotos(albumIdRange: [number, number]) {
    const [start, end] = albumIdRange;
    const albumMap = new Map<number, Photos>();

    
    this.photos
      .filter((photo) => photo.albumId >= start && photo.albumId <= end)
      .forEach((photo) => {
        if (!albumMap.has(photo.albumId)) {
          albumMap.set(photo.albumId, photo);
        }
      });

    
    this.filteredPhotos = Array.from(albumMap.values()).slice(0, 20);
  }

  showAllPhotos() {
    const albumMap = new Map<number, Photos>();

    
    this.photos.forEach((photo) => {
      if (!albumMap.has(photo.albumId)) {
        albumMap.set(photo.albumId, photo);
      }
    });

    
    this.filteredPhotos = Array.from(albumMap.values());
  }
  ngOnDestroy() : void {
    
  }

  cardTriggered(message : string) {
    this.snackBar.open(message, 'Close', { 
      duration: 2000 
    }); 
  }
}
