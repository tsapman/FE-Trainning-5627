import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFooterButtonsComponent } from './top-footer-buttons.component';

describe('TopFooterButtonsComponent', () => {
  let component: TopFooterButtonsComponent;
  let fixture: ComponentFixture<TopFooterButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopFooterButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFooterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
