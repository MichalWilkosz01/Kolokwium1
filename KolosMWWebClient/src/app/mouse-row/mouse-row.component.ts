import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MouseResponseDto } from '../../models/mouse-response-dto';

@Component({
  selector: '[app-mouse-row]',
  templateUrl: './mouse-row.component.html',
  styleUrl: './mouse-row.component.css'
})
export class MouseRowComponent {
  @Input('app-mouse-row') mouse!: MouseResponseDto;
  @Output() choosed = new EventEmitter<MouseResponseDto>();

  onChooseClick() {
    this.choosed.emit(this.mouse);
  }
}
