import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesComponent } from './images.component';
import { HttpClientModule } from '@angular/common/http';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;
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
      imports: [ImagesComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should trigger the pop up upon clcicking on a card', () => {
    component.photos = [];
    component.photos[0] = mockPhotos[0];

    spyOn(component.clickOnCardEvent, 'emit');
    component.onCardClick(component.photos[0]);

    expect(component.clickOnCardEvent.emit).toHaveBeenCalledWith(`Card with ID ${component.photos[0].id} clicked!`);
  });
});
