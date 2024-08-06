import { NgFor } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
declare var $: any;

export interface Card {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  cards: Card[] = [
    { id: 1, title: 'Card 1', text: 'Some quick example text for Card 1.', imageUrl: 'assets/img/poert1.png' },
    { id: 2, title: 'Card 2', text: 'Some quick example text for Card 2.', imageUrl: 'assets/img/port2.png' },
    { id: 3, title: 'Card 3', text: 'Some quick example text for Card 3.', imageUrl: 'assets/img/port3.png' },
    { id: 3, title: 'Card 3', text: 'Some quick example text for Card 3.', imageUrl: 'assets/img/port2.png' },
    { id: 3, title: 'Card 3', text: 'Some quick example text for Card 3.', imageUrl: 'assets/img/port3.png' },
    { id: 3, title: 'Card 3', text: 'Some quick example text for Card 3.', imageUrl: 'assets/img/poert1.png' },
  ];
  selectedCard!:Card;
  openModal(card:Card) :void{
    $('#portfolio').modal('show');
    this.selectedCard = card;
  }

  closeModal() {
    $('#portfolio').modal('hide');
  }
  }
