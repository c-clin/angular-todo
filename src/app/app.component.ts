import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { TodoService } from './todos/todo.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  title = 'Angular Todo App';
  todoTextInput: string;
  @ViewChild('todoTextInputRef') textInput: ElementRef;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log(this.todoTextInput);
  }

  addNewTodo() {
    this.todoService.addNewTodo(this.textInput.nativeElement.value);
    this.textInput.nativeElement.value = '';
  }

}
