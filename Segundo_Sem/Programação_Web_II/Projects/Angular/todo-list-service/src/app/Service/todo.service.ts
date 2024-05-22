import { Todo } from "../Model/todo.model";

export class TodoService {
  todoOnGoing: Todo[] = [];
  todoCompleted: Todo[] = [];

  LoadTodo() { 
    const http:
  }


  TodoCreate(todoTitle: string) {
    this.todoOnGoing.push(new Todo(this.todoOnGoing.length + 1, todoTitle));
    console.log(this.todoOnGoing);
  }

  TodoAdd(todo: Todo) {
    this.todoOnGoing.push(todo);
  }

  TodoComplete(todoId: number) {
    const todo = this.todoOnGoing.find(todo => todo.id == todoId);
    const todoIndex = this.todoOnGoing.indexOf(todo);
    if (todoIndex == -1) return;

    this.todoCompleted.push(todo);
    this.todoOnGoing.splice(todoIndex, 1);
  }
}