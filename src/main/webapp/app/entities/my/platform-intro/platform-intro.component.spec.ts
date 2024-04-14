import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformIntroComponent } from './platform-intro.component';

describe('PlatformIntroComponent', () => {
  let component: PlatformIntroComponent;
  let fixture: ComponentFixture<PlatformIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformIntroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatformIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
