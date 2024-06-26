import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MouseRequestDto } from '../../models/mouse-request-dto';
import { MouseService } from '../mouse.service';

@Component({
  selector: 'app-mouse-form',
  templateUrl: './mouse-form.component.html',
  styleUrl: './mouse-form.component.css'
})
export class MouseFormComponent {
  @Output() submit = new EventEmitter<void>();

  public object: MouseRequestDto = {
    model: "",
    dpi: 0
  };

  private readonly api = inject(MouseService);

  public onSubmit(event: any) : void {
    console.log('event: ', event);
    console.log('object: ', this.object);

    this.api.post(this.object).subscribe({
      next: () => {
        console.log('dodano myszke');
        this.submit.emit();
      },
      error: (err) => console.error(err)
    })
  }
}
