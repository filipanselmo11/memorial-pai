import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input('src') src!: string;
  @Output('click-card') clickCard = new EventEmitter();

  handleCardClick() {
    this.clickCard.emit();
  }
}
