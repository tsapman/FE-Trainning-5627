import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondAlbumComponent } from './second-album.component';
import { HttpClientModule } from '@angular/common/http'; // <-- Add this import
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { of } from 'rxjs';

describe('SecondAlbumComponent', () => {
  let component: SecondAlbumComponent;
  let fixture: ComponentFixture<SecondAlbumComponent>;
  const mockPhotos = [ {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 2,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  } 
    ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SecondAlbumComponent,
        HttpClientModule
      ],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { 
            snapshot: { paramMap: { get: () => '2' } },
            paramMap: { subscribe: (fn: any) => fn({ get: () => '2' }) } 
          }
        },
        {
          provide : DataService,
          useValue: {
            getAllPhotos : () => of(mockPhotos)
            }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set filteredPhotos accordingly for the provided albumId', () => {
    let albumId = 2;
    
    expect(Number(component.filteredPhotos[0].albumId)).toEqual(albumId);
    expect(component.filteredPhotos.length).toBe(1);
  });
});
