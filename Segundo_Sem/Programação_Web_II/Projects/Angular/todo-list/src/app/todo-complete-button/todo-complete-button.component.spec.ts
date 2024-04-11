import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCompleteButtonComponent } from './todo-complete-button.component';

describe('TodoCompleteButtonComponent', () => {
  let component: TodoCompleteButtonComponent;
  let fixture: ComponentFixture<TodoCompleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCompleteButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoCompleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
