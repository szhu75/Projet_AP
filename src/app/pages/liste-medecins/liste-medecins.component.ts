import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Medecin } from '../../types/medecin';
import { DoctorsService } from '../..//services/doctors.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DoctorComponent } from '../../components/doctor/doctor.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from "../../filters/filters.component";

@Component({
  selector: 'app-liste-medecins',
  standalone: true,
  imports: [FiltersComponent, DoctorComponent],
  templateUrl: './liste-medecins.component.html',
  styleUrl: './liste-medecins.component.css'
})
export class ListeMedecinsComponent {
  private readonly doctorsService : DoctorsService = inject(DoctorsService);
  private readonly destroyRef : DestroyRef = inject(DestroyRef);
  
  medecins!: Medecin[]; 
  filteredMedecins!: Medecin[]; 
  searchDoctorControl!: FormControl<any>;
  title: any;

  ngOnInit(): void {
    this.doctorsService.getDoctors()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe( (medecins:Medecin[] ) : void => {
        this.medecins = medecins;
        this.filteredMedecins = medecins;  
      });
    }

searchDoctor(name: string): void {

  if(!name) {
    this.filteredMedecins = this.medecins;
    return;
  }

  this.filteredMedecins = this.medecins.filter((medecin : Medecin ) => {
    return medecin.prenom.toLowerCase().includes(name.toLowerCase());
  });
}
}