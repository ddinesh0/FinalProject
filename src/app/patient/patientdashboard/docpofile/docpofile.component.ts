import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/doctor';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-docpofile',
  templateUrl: './docpofile.component.html',
  styleUrls: ['./docpofile.component.css']
})
export class DocpofileComponent implements OnInit{

  id:number=8;
shows=true;

doctor:Doctor=new Doctor();

constructor(private doctorser:DoctorService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    console.log(params['id']);

    this.doctorser.getdoctorById(params['id']).subscribe(data => {
      this.doctor = data;
    }, error => console.log(error));
  });

}
close() {
  this.router.navigate(['/patientdash'])

}
downloadPDF() {
  const data = document.getElementById("content");
  if (data instanceof HTMLElement) { // Perform a null check
    html2canvas(data).then(canvas => {
      console.log("downloading");

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

