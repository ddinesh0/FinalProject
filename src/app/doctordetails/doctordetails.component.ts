import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.component.html',
  styleUrls: ['./doctordetails.component.css']
})
export class DoctordetailsComponent  implements OnInit{


binding: any;
Doctor: any;





constructor(public doctorService:DoctorService,private router:Router){

}

  ngOnInit(): void {
    this.getview();
    this.deleteRow(1);

  }

  create() {
   this.router.navigate(['/doctor']);
    }

getview(){
  this.doctorService.getview().subscribe((data:Doctor[])=>{
    this.Doctor=data;
    console.log(this.Doctor);
  });
}

    updatelist(id:number) {
        this.router.navigate(['doctorupdate/edit/'+id])
     }


    deleteRow(id:number) {

      this.doctorService.deletelist(id).subscribe(data=>{
        console.log(data),
        this.ngOnInit();
      });

    }

    back() {
      this.router.navigate(['admin'])

      }
}
