import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input('visible') visible!: boolean;
  @Output('close-modal') closeModal = new EventEmitter();

  handleCloseModal() {
    this.visible = false;
    this.closeModal.emit();
  }
}
