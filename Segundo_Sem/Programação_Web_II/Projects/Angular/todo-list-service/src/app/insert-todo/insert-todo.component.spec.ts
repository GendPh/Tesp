import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTodoComponent } from './insert-todo.component';

describe('InsertTodoComponent', () => {
  let component: InsertTodoComponent;
  let fixture: ComponentFixture<InsertTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
