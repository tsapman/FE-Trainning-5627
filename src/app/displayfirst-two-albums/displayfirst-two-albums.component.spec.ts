import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { DisplayfirstTwoAlbumsComponent } from './displayfirst-two-albums.component';
import { HttpClientModule } from '@angular/common/http';

describe('DisplayfirstTwoAlbumsComponent', () => {
  let component: DisplayfirstTwoAlbumsComponent;
  let fixture: ComponentFixture<DisplayfirstTwoAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayfirstTwoAlbumsComponent, HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: {} }
      ]
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
