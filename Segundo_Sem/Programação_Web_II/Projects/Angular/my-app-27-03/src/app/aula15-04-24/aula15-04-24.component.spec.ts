import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula150424Component } from './aula15-04-24.component';

describe('Aula150424Component', () => {
  let component: Aula150424Component;
  let fixture: ComponentFixture<Aula150424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula150424Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula150424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
