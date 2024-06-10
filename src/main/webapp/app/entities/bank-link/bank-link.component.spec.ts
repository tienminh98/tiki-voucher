import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankLinkComponent } from './bank-link.component';

describe('BankLinkComponent', () => {
  let component: BankLinkComponent;
  let fixture: ComponentFixture<BankLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
