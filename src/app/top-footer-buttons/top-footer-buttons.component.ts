import { Component, EventEmitter, Output, Input } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { Photos } from '../photos';

@Component({
  selector: 'app-top-footer-buttons',
  standalone: true,
  imports: [DisplayComponent],
  templateUrl: './top-footer-buttons.component.html',
  styleUrl: './top-footer-buttons.component.scss'
})
export class TopFooterButtonsComponent {
@Input() photos: Photos[] = [];
filteredPhotos: Photos[] = [];
@Output() clickButtonEvent = new EventEmitter<Photos[]>();

filterPhotos(albumIdRange: [number, number]): void {
    const [start, end] = albumIdRange;
    const albumMap = new Map<number, Photos>();
    this.photos
        .filter((photo: Photos) => photo.albumId >= start && photo.albumId <= end)
        .forEach((photo: Photos) => {
            if (!albumMap.has(photo.albumId)) {
                albumMap.set(photo.albumId, photo);
            }
        });
    this.filteredPhotos = Array.from(albumMap.values()).slice(0, 20);
    this.clickButtonEvent.emit(this.filteredPhotos);
}

showFilteredPhotos(albumIdRange: [number, number]): void {
    const [start, end] = albumIdRange; // Destructure the range
    const albumMap = new Map<number, Photos>();
    this.photos
        .filter((photo: Photos) => photo.albumId >= start && photo.albumId <= end)
        .forEach((photo: Photos) => {
            if (!albumMap.has(photo.albumId)) {
                albumMap.set(photo.albumId, photo);
            }
        });
    this.filteredPhotos = Array.from(albumMap.values()).slice(0, 20);
    this.clickButtonEvent.emit(this.filteredPhotos);
}

showAllPhotos(): void {
  const albumMap = new Map<number, Photos>();
  this.photos
    .filter((photo: Photos) => photo.albumId >= 1 && photo.albumId <= 100) // Filter album IDs 1 to 100
    .forEach((photo: Photos) => {
      if (!albumMap.has(photo.albumId)) {
        albumMap.set(photo.albumId, photo);
      }
    });
  this.filteredPhotos = Array.from(albumMap.values()); // Include all filtered photos
  this.clickButtonEvent.emit(this.filteredPhotos); // Emit the filtered photos
}
}
