import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  paragraphs: string[] = [
    "Nissan Tidal",
    "Mercedes-Benz",
    "BMW",
    "Audi"
  ]

  selectedContent: string = 'Nissan Tidal';

  onParagraphClick(paragraph: string): void {
    this.selectedContent = paragraph
  }

}
