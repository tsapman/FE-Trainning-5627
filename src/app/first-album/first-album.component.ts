import { Component } from '@angular/core';
import { Photos } from '../photos';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardActions, MatCardContent, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImagesComponent } from '../images/images.component';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-first-album',
  standalone: true,
  imports: [CommonModule,MatCardActions,MatCardContent,MatCardModule,MatDialogModule],
  templateUrl: './first-album.component.html',
  styleUrl: './first-album.component.scss'
})
export class FirstAlbumComponent {  
  public photos: Photos[] = [];
  public filteredPhotos: Photos[] = [];
  public errorMessage: string = '';
  public albumIdParam: string = '';

  constructor(private data_service: DataService, private router: ActivatedRoute, private _matDialog: MatDialog) {
    this.albumIdParam = this.router.snapshot.paramMap.get('albumId') ?? '';
    const albumId: number =  Number(this.albumIdParam);

    this.data_service.getAllPhotos().subscribe({
      next: (photos: Photos[]) => {
        this.photos = photos;
        if (albumId !== null) {
          this.filteredPhotos = this.photos.filter((photo: Photos) => photo.albumId === albumId);
        } else {
          this.filteredPhotos = [];
        }
      },
      error: (error: any) => {
        this.errorMessage = error;
        console.error('Error fetching photos:', error);
      }
    });
  }

  ngOnDestroy(): void {}

  openDialogToShowId(photo : Photos): void {
    this._matDialog.open(DialogComponent, {width : "400px", height : "475px", data: photo} )
  }

  
  
}
