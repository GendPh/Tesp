import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula240424Component } from './aula240424.component';

describe('Aula240424Component', () => {
  let component: Aula240424Component;
  let fixture: ComponentFixture<Aula240424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula240424Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula240424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
