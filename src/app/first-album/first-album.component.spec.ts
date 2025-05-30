import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { FirstAlbumComponent } from './first-album.component';
import { HttpClientModule } from '@angular/common/http';
import { Photos } from '../photos';
import { DataService } from '../service/data.service';
import { MatDialog } from '@angular/material/dialog';

describe('FirstAlbumComponent', () => {
  let component: FirstAlbumComponent;
  let fixture: ComponentFixture<FirstAlbumComponent>;
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
    
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    matDialogSpy.open.and.returnValue({
      afterClosed: () => of(true) 
    });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstAlbumComponent, HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } },
            paramMap: of({ get: () => '1' })
          }
        },
        {
          provide: DataService,
          useValue: {
            getAllPhotos: () => of(mockPhotos)
          }
        },
        {
          provide: MatDialog,
          useValue: matDialogSpy
        }
      ]
    }).compileComponents();

    // Force the spy to be used
    await TestBed.overrideComponent(FirstAlbumComponent, {
      set: {
        providers: [
          { provide: MatDialog, useValue: matDialogSpy }
        ]
      }
    });

    fixture = TestBed.createComponent(FirstAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('Set filteredPhotos correctly for the provided albumId', () => {
    let albumId = 1;

    expect(Number(component.filteredPhotos[0].albumId)).toEqual(albumId);
    expect(component.filteredPhotos.length).toBe(1);

    
   });
  it('should open dialog with correct data when openDialogToShowId is called', () => {
    
    

    component.openDialogToShowId(mockPhotos[0]);

    expect(matDialogSpy.open).toHaveBeenCalledWith(
      jasmine.any(Function), // DialogComponent is a function/class
      jasmine.objectContaining({
        width: 'auto',
        height: '475px',
        data: mockPhotos[0]
      })
    );
  });

});




