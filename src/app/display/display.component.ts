import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';
import { Photos } from '../photos';
import { ImagesComponent } from '../images/images.component'; // Import ImagesComponent
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule,ImagesComponent,SnackbarComponent],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  photos: Photos[] = [];
  filteredPhotos: Photos[] = []; // Array to hold filtered photos
  errorMessage: string = '';

  constructor(private data_service: DataService) {}

  ngOnInit() {
    this.data_service.getAllPhotos().subscribe({
      next: (photos) => {
        this.photos = photos;
        this.showAllPhotos(); // Initially filter to show one photo per album
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

    // Group photos by albumId and pick the first photo for each albumId
    this.photos
      .filter((photo) => photo.albumId >= start && photo.albumId <= end)
      .forEach((photo) => {
        if (!albumMap.has(photo.albumId)) {
          albumMap.set(photo.albumId, photo);
        }
      });

    // Convert the map values to an array and limit to the first 20 albums
    this.filteredPhotos = Array.from(albumMap.values()).slice(0, 20);
  }

  showAllPhotos() {
    const albumMap = new Map<number, Photos>();

    // Group photos by albumId and pick the first photo for each albumId
    this.photos.forEach((photo) => {
      if (!albumMap.has(photo.albumId)) {
        albumMap.set(photo.albumId, photo);
      }
    });

    // Convert the map values to an array
    this.filteredPhotos = Array.from(albumMap.values());
  }
  ngOnDestroy() : void {
    
  }
}
