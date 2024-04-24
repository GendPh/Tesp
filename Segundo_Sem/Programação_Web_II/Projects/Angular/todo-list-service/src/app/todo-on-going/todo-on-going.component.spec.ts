import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoOnGoingComponent } from './todo-on-going.component';

describe('TodoOnGoingComponent', () => {
  let component: TodoOnGoingComponent;
  let fixture: ComponentFixture<TodoOnGoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoOnGoingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoOnGoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
