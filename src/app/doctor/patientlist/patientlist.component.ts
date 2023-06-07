import { Component, OnInit } from '@angular/core';
import { Patient } from '../../patient';
import { PatientService } from '../../patient.service';
import { Router } from '@angular/router';
import { DoctordashboardComponent } from '../doctordashboard/doctordashboard.component';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {


Patient: any;
show=true;

constructor(private patientservice:PatientService,private router:Router){}
  ngOnInit(): void {
    this.getview();

  }

  getview(){
    this.patientservice.getview().subscribe((data:Patient[])=>{
      this.Patient=data;
      console.log(this.Patient);
    });
  }
  closepopup() {
    this.router.navigate(['/dashboard'])

    }
}
