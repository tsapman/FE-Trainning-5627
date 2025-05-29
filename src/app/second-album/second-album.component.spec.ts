import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondAlbumComponent } from './second-album.component';
import { HttpClientModule } from '@angular/common/http'; // <-- Add this import
import { ActivatedRoute } from '@angular/router';

describe('SecondAlbumComponent', () => {
  let component: SecondAlbumComponent;
  let fixture: ComponentFixture<SecondAlbumComponent>;

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
            snapshot: { paramMap: { get: () => '1' } },
            paramMap: { subscribe: (fn: any) => fn({ get: () => '1' }) } // if your component subscribes to paramMap
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
