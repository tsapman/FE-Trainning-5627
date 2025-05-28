import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogComponent } from './dialog.component';
import { Photos } from '../photos';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent,CommonModule,MatButtonModule,MatIconModule,MatDialogModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    component.photos = [ {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  } 
    ] as Photos[];
    fixture.detectChanges();
  });

  it('should return the photo id when calling the showId function', () => {
    const photoId = 2;
    const result = component.showId(component.photos[1]);

    expect(result).toEqual(photoId);
  });

  it('should call ngOnDestroy without errors', () => {
    expect(() => component.ngOnDestroy()).not.toThrow();
  });
});
