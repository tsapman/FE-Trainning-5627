import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { FirstAlbumComponent } from './first-album.component';
import { HttpClientModule } from '@angular/common/http';

describe('FirstAlbumComponent', () => {
  let component: FirstAlbumComponent;
  let fixture: ComponentFixture<FirstAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstAlbumComponent, HttpClientModule],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { 
            snapshot: { paramMap: { get: () => '1' } },
            paramMap: of({ get: () => '1' }) // keep this if your component also subscribes to paramMap
          } 
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
