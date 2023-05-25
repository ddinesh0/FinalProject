import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/appointment';
import { Router } from '@angular/router';
import { AppointmentService } from '../../appointment.service';
import { Patient } from '../../patient';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']
})
export class AppointmentlistComponent implements OnInit{


  patient:Patient=new Patient();

appointment:Appointment=new Appointment();
Appointment: any;
jspdf:any;
then:any;
canvas:any;

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
 downloadPDF() {
  const data = document.getElementById("content");
if (data) {
html2canvas(data).then(canvas => {
console.log("downloding");


    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;
    var heightLeft = imgHeight;

    const contentDataURL = canvas.toDataURL("image/png");
    let pdf = new jspdf("p", "mm", "a4");
    var position = 0;
    pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
    pdf.save("MYPdf.pdf");
  });
}
}


}


