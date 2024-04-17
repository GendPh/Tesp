import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula170424Component } from './aula170424.component';

describe('Aula170424Component', () => {
  let component: Aula170424Component;
  let fixture: ComponentFixture<Aula170424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula170424Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula170424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
