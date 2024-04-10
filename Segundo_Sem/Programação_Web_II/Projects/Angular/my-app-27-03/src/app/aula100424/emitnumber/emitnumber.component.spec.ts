import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitnumberComponent } from './emitnumber.component';

describe('EmitnumberComponent', () => {
  let component: EmitnumberComponent;
  let fixture: ComponentFixture<EmitnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmitnumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmitnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
