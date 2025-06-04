import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFooterButtonsComponent } from './top-footer-buttons.component';
import { Photos } from '../photos';

describe('TopFooterButtonsComponent', () => {
  let component: TopFooterButtonsComponent;
  let fixture: ComponentFixture<TopFooterButtonsComponent>;
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
      imports: [TopFooterButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFooterButtonsComponent);
    component = fixture.componentInstance;
    component.photos = mockPhotos as Photos[];
    fixture.detectChanges();
  });

  it('should filter the photos correctly based on the given albumIdRange', () => {
    let albumIdRange: [number, number] = [1, 1];
    component.filterPhotos(albumIdRange);

    expect(component.filteredPhotos.length).toBe(1);
  });

  it('should show all photos when no filter is applied and the function showAllPhotos is called', () => {
    let testPhotos: Photos[];
    testPhotos = mockPhotos as Photos[];

    component.showAllPhotos();
    

    expect(component.filteredPhotos.length).toBe(testPhotos.length);
    expect(component.filteredPhotos).toEqual(testPhotos);
  });
});
