import { Component, OutputEmitterRef, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  searchDoctorControl : FormControl<string | null> = new FormControl<string | null>(null);

  searchDoctor : OutputEmitterRef<string> = output<string>();

  addFilter(): void {
    if (this.searchDoctorControl.value === null) {
      return;
    }
    this.searchDoctor.emit(this.searchDoctorControl.value);
  }

}
