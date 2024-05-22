import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula220524Component } from './aula-220524.component';

describe('Aula220524Component', () => {
  let component: Aula220524Component;
  let fixture: ComponentFixture<Aula220524Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula220524Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula220524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
