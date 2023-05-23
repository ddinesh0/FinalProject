import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  admin:Admin=new Admin();
  doctor:Doctor=new Doctor();



  constructor(private router:Router,private adminService:AdminService, private doctorservice:DoctorService) {
  }


public back(){
  this.router.navigate(['welcomepage']);
}
ngOnInit(): void {


}
public adminLogin(){
  this.adminService.loginAdmin(this.admin).subscribe((data:any)=>{
    //if(admin)
   console.log("Registered Successfully"),
   this.router.navigate(['admin'])
  });
  }
  public doctorLogin(){
    this.doctorservice.logindoctor(this.doctor).subscribe((data:any)=>{
      console.log("Doctor login sucessfully"),
      this.router.navigate(['dashboard'])
    });
  }
  public Signin( adminEmailId: String,adminPassword: String,email: String,password: String ){

    console.log(adminEmailId);
    console.log(adminPassword);
    console.log(password);
    console.log(email);


      // if(adminEmailId!=="" && adminPassword!=="" )
      // {
      //   console.log("success");


      if(email=="hendry@gmail.com" && password=="Hendryten12")
      {
        console.log("doctor log sucuessfully");
        this.router.navigateByUrl('/dashboard');



      }
      if(adminEmailId=="dinesh01@gmail.com"&& adminPassword=="Dinesh12"){

        console.log("admin log sucuessfully");
        this.router.navigateByUrl("/admin")
      }





  }
  // else{
  //   this.router.navigateByUrl('/login');
  // }



  //   this.router.navigate(['/admin']);
  //  }
  }



