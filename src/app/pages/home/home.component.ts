import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // images = [
  //   '../../../assets/pai-1.jpeg',
  //   '../../../assets/pai-1.jpeg',
  //   '../../../assets/pai-1.jpeg',
  //   '../../../assets/pai-1.jpeg',
  // ];

  openModalImage() {
    alert('Open Image Modal');
  }
}
