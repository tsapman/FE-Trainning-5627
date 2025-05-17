import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';
import { Photos } from '../photos';
import { ImagesComponent } from '../images/images.component'; 
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TopFooterButtonsComponent } from '../top-footer-buttons/top-footer-buttons.component';
import { DisplayfirstTwoAlbumsComponent } from '../displayfirst-two-albums/displayfirst-two-albums.component';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule,ImagesComponent,SnackbarComponent,TopFooterButtonsComponent,DisplayfirstTwoAlbumsComponent],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  photos: Photos[] = [];
  filteredPhotos: Photos[] = []; 
  errorMessage: string = '';
  showAllAlbums: boolean = true;

  constructor(private data_service: DataService, private snackBar : MatSnackBar ) {}

  ngOnInit() {
    this.data_service.getAllPhotos().subscribe({
      next: (photos) => {
        this.photos = photos;
        
      },
      error: (error) => {
        this.errorMessage = error;
        console.error('Error fetching photos:', error);
      },
    });
  }

  
  ngOnDestroy() : void {
    
  }

  cardTriggered(message : string) {
    this.snackBar.open(message, 'Close', { 
      duration: 2000 
    }); 
  }

  topFooterButtonClicked(photos : Photos[]) {
    this.filteredPhotos = photos;
  }
}
