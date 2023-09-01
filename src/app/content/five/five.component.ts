import { Component } from '@angular/core';

interface todo {
  id: number;
  title: string;
}

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})

export class FiveComponent {
  todos: todo[] = [
    { id: 1, title: "Javascript" },
    { id: 2, title: "ReactJS" },
    { id: 3, title: "NodeJS" },
  ];
}


