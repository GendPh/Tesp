import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula100424Component } from './aula100424.component';

describe('Aula100424Component', () => {
  let component: Aula100424Component;
  let fixture: ComponentFixture<Aula100424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula100424Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula100424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
