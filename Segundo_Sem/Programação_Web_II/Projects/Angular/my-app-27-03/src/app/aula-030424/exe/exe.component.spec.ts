import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeComponent } from './exe.component';

describe('ExeComponent', () => {
  let component: ExeComponent;
  let fixture: ComponentFixture<ExeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
