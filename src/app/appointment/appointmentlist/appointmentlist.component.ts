import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/appointment';
import { Router } from '@angular/router';
import { AppointmentService } from '../../appointment.service';
import { Patient } from '../../patient';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']
})
export class AppointmentlistComponent implements OnInit{


  patient:Patient=new Patient();

appointment:Appointment=new Appointment();
Appointment: any;

constructor(public router:Router,public appointmentservice:AppointmentService){

}
ngOnInit(): void {
  this.getview();

}

getview(){
  this.appointmentservice.getview().subscribe((data:Appointment[])=>{
    this.Appointment=data;
    console.log(this.Appointment);
    const patient = this.Appointment[0].patient
    console.log(patient);

  });
}


}
