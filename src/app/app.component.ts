import {Component, OnInit} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit{

  newTodo: Todo = new Todo();
  priorities = Array<string>();

  ngOnInit(): void {
    
            this.priorities = Array<string>();
            this.priorities.push('High');
            this.priorities.push('Normal');
            this.priorities.push('Low');      
        }
      


  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  updateTodo(todo){
    this.todoDataService.updateTodoById(todo.id, todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  loadTodosFromLocalStorage(){
    this.todoDataService.loadTodosFromLocalStorage();
  }

}