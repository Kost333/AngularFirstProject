import { Component } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})

export class FiveComponent {
  searchQuery: string = '';
  newToDo: string = '';
  filteredTodos: { title: string; completed: boolean }[] = [];

  addItem(): void {
    if (this.newToDo.trim() !== '') {
      this.todos.push({ title: this.newToDo, completed: false });
      this.newToDo = '';
    }
  }

  removeItem(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }

  filterTodos(): void {
    console.log('Search Query:', this.searchQuery);
    this.filteredTodos = this.todos.filter((todo) =>
      todo.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    console.log('Filtered Todos:', this.filteredTodos);
  }

  todos: { title: string; completed: boolean }[] = [
    { title: "AngularJS", completed: true },
    { title: "Javascript", completed: false },
    { title: "ReactJS", completed: false },
    { title: "NodeJS", completed: false },
  ];
}


