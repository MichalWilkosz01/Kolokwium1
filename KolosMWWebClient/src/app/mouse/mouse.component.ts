import { Component } from '@angular/core';
import { MouseResponseDto } from '../../models/mouse-response-dto';
import { MouseService } from '../mouse.service';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrl: './mouse.component.css'
})
export class MouseComponent {
  public data: MouseResponseDto[] = [];
  public choosedMouse?: MouseResponseDto = undefined;
  public isFormActive: boolean = true;


  constructor(private mouseService: MouseService) {
    this.loadData();
  }

  loadData() {
     this.mouseService.get().subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete')
    });
  }

  onChoosedRow(event: MouseResponseDto): void {
    this.choosedMouse = event;
    this.mouseService.delete(this.choosedMouse.id).subscribe({
      next: (res) => {
        console.log(res);
        this.loadData();
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete')
    });
  }


  onPageChange() {
    this.isFormActive = !this.isFormActive;
    this.loadData();
  }
}
