import { Component, OnInit } from '@angular/core';
import { Medecin } from '../../types/medecin';
import { DoctorsService } from '../../services/doctors.service';
import { input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-medecin',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './detail-medecin.component.html',
  styleUrls: ['./detail-medecin.component.css']
})
export class DetailMedecinComponent implements OnInit {
  id = input.required<number>(); 
  medecin!: Medecin; 

  constructor(private doctorsService: DoctorsService) {}
  ngOnInit() {
    this.loadMedecinDetail();
  }

  private loadMedecinDetail() {
    const medecinId = this.id(); 
    this.doctorsService.getMedecinById(medecinId).subscribe((medecin: Medecin) => {
      this.medecin = medecin; 
      console.log(medecin);
    });
  }
}
