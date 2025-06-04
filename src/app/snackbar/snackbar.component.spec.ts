import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarComponent } from './snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;
  let snackBarSpy: MatSnackBar;
  const mockPhotos = [ {
    "albumId": 2,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  } 
    ];

  beforeEach(async () => {
    snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.overrideProvider(MatSnackBar, { useValue: snackBarSpy });
    await TestBed.configureTestingModule({
      imports: [SnackbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show SnackBar when the showSnackBar function is called', () => {
    let message: string = "Test Message";
    let action: string = "Close";
    let duration: number = 3000;

    component.showSnackbar(message, action, duration);
    expect(snackBarSpy.open).toHaveBeenCalledWith(message, action, { duration: duration });
  });

  it('should call showSnackbar with the default duration when duracion is not provided', () => {
    let message: string = "Test Message";
    let action: string = "Close";

    component.showSnackbar(message, action);

    expect(snackBarSpy.open).toHaveBeenCalledWith(message, action, { duration: 3800});
  });
it('should return the image id as a string', () => {
    component.photo = mockPhotos[0];
    let imageId = component.getImageId();

    expect(imageId).toBe('2');
});

});
