import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdawDetailComponent } from './withdaw-detail.component';

describe('WithdawDetailComponent', () => {
  let component: WithdawDetailComponent;
  let fixture: ComponentFixture<WithdawDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdawDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdawDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
