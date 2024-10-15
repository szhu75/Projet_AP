import { Component, Input, OnInit } from '@angular/core';
import { Medecin } from '../../types/medecin';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-detail-medecin',
  standalone: true,
  imports: [],
  templateUrl: './detail-medecin.component.html',
  styleUrls: ['./detail-medecin.component.css']
})
export class DetailMedecinComponent implements OnInit {
  @Input() id!: string;
  medecin!: Medecin;

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit() {
    this.doctorsService.getMedecinById(this.id).subscribe(
      data => {
        this.medecin = data;
        console.log('Détails du médecin:', this.medecin);
      },
      error => {
        console.error('Erreur lors de la récupération des détails du médecin:', error);
      }
    );
  }
}
