import { Component } from '@angular/core';
import { Card } from '../portfolio/portfolio.component';
import { NgFor } from '@angular/common';
import { RecommendedComponent } from "../recommended/recommended.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, RecommendedComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  cards: Card[] = [
    { id: 1, title: 'Card 1', text: 'Some quick example text for Card 1.', imageUrl: 'assets/img/poert1.png' },
    { id: 2, title: 'Card 2', text: 'Some quick example text for Card 2.', imageUrl: 'assets/img/port2.png' },
    { id: 3, title: 'Card 3', text: 'Some quick example text for Card 3.', imageUrl: 'assets/img/port3.png' },
    { id: 3, title: 'Card 3', text: 'Some quick example text for Card 3.', imageUrl: 'assets/img/port2.png' },
    { id: 3, title: 'Card 3', text: 'Some quick example text for Card 3.', imageUrl: 'assets/img/port3.png' },
    { id: 3, title: 'Card 3', text: 'Some quick example text for Card 3.', imageUrl: 'assets/img/poert1.png' },
  ];
}
