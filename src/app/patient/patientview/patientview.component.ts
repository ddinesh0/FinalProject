import { Component, OnInit } from '@angular/core';
import { Patient } from '../../patient';
import { Router } from '@angular/router';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-patientview',
  templateUrl: './patientview.component.html',
  styleUrls: ['./patientview.component.css']
})
export class PatientviewComponent implements OnInit{


Patient: any;

constructor(private router:Router,private patientservice:PatientService){

}

  ngOnInit(): void {
    this.getview();
    this.deleteRow(1);

  }



  create() {
    this.router.navigate(['/patient'])

    }

    getview(){
      this.patientservice.getview().subscribe((data:Patient[])=>{
        this.Patient=data;
        console.log(this.Patient);
      });
    }

    back() {

    }
    deleteRow(id:number) {
      this.patientservice.deletelist(id).subscribe(data=>{
        console.log(data),
        this.ngOnInit();
      });

    }
    updatelist(id:number) {
      this.router.navigate(['patientupdate/'+id])

    }

    appointment(id:number) {
      this.router.navigate(['appointment/'+id])

      }
}
