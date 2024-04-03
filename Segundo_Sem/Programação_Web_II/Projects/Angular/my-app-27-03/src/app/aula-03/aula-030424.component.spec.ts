import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula030424Component } from './aula-030424.component';

describe('Aula030424Component', () => {
  let component: Aula030424Component;
  let fixture: ComponentFixture<Aula030424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula030424Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aula030424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
