import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';
import { Photos } from '../photos';
import { ImagesComponent } from '../images/images.component'; 
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TopFooterButtonsComponent } from '../top-footer-buttons/top-footer-buttons.component';
import { DisplayfirstTwoAlbumsComponent } from '../displayfirst-two-albums/displayfirst-two-albums.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule,ImagesComponent,SnackbarComponent,TopFooterButtonsComponent,DisplayfirstTwoAlbumsComponent, MatIcon, FormsModule, MatLabel,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  public photos: Photos[] = [];
  public filteredPhotos: Photos[] = []; 
  public errorMessage: string = '';
  public showAllAlbums: boolean = true;
  public value: string = 'clear';
  public searchPhotoId : string = '';

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

  onSearchPhotoById() : void {
  }
}
