import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardActions, MatCardContent, MatCardModule } from '@angular/material/card';
import { Photos } from '../photos';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-album',
  standalone: true,
  imports: [CommonModule,MatCardActions,MatCardContent,MatCardModule],
  templateUrl: './second-album.component.html',
  styleUrl: './second-album.component.scss'
})
export class SecondAlbumComponent {
  public photos: Photos[] = [];
  public filteredPhotos: Photos[] = [];
  public errorMessage: string = '';
  public albumIdParam: string = '';

  constructor(private data_service: DataService, private router: ActivatedRoute) {
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

  

}
