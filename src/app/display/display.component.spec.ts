import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../service/data.service';
import { DisplayComponent } from './display.component';
import { Photos } from '../photos';
import { of } from 'rxjs';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
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

  it('should set filteredPhotos to photos for a specific Id', () => {
    component.searchPhotoId = 1;
    const result = component.onSearchPhotoById();
    expect(component.filteredPhotos.length).toBe(1);
    expect(component.searchByPhotoIdApplied).toBeTrue();
    expect(component.filteredPhotos[0].id).toBe(1);
    expect(result).toBeTrue();
  });

  it('should set the filteredPhotos to be empty and searchByPhotoIdApplied to be false when the searchPhotoId is 0', () => {
    component.searchPhotoId = 0;
    const result = component.onSearchPhotoById();
    expect(component.searchByPhotoIdApplied).toBeFalse();
    expect(component.filteredPhotos.length).toBe(0);
    expect(result).toBeFalse();
  });

  it('should set filteredPhotos to photos when a topFooterButton is clicked', () => {
    component.topFooterButtonClicked(component.photos)
    const result = component.filteredPhotos;
    expect(result.length).toBe(2);
    expect(result).toEqual(component.photos);
    expect(component.searchByPhotoIdApplied).toBeFalse();
    expect(result[1].title).toEqual(component.photos[1].title);
  });

});

describe('DisplayComponent ngOnit', ()=> {
  let component: DisplayComponent;
  let fixture : ComponentFixture<DisplayComponent>;
  let mockDataService : jasmine.SpyObj<any>;

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('DataService',['getAllPhotos']);

    await TestBed.configureTestingModule({
      imports: [DisplayComponent],
      providers: [
        { provide: DataService, useValue: mockDataService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
  });

  it('should set photos on successful fetch', () => {
    const mockPhotos = [
      {
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
    ];
    mockDataService.getAllPhotos.and.returnValue(of(mockPhotos));

    component.ngOnInit();
    expect(component.photos).toEqual(mockPhotos);
    expect(component.errorMessage).toBe('');

  });

  it('should set errorMessage on fetch failure', () => {
    const error = 'Failed to fetch photos';
    mockDataService.getAllPhotos.and.returnValue(of({ error }));

    component.ngOnInit();
    expect(component.errorMessage).toBe(error);
    expect(component.photos.length).toBe(0);
  });

});


