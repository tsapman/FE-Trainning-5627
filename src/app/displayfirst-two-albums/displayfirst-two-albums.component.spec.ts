import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfirstTwoAlbumsComponent } from './displayfirst-two-albums.component';

describe('DisplayfirstTwoAlbumsComponent', () => {
  let component: DisplayfirstTwoAlbumsComponent;
  let fixture: ComponentFixture<DisplayfirstTwoAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayfirstTwoAlbumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayfirstTwoAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
