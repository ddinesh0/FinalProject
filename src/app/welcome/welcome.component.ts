import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/appointment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  appointment1:Appointment=new Appointment();


  constructor(private router:Router){

  }
 ngOnInit(): void {

 }
 public SignUp(){
  this.router.navigate(['/signup']);
 }
 public SignIn(){
  this.router.navigate(['/signin']);
 }
 public appointment(){
  if(confirm('Please register first'))
  this.router.navigate(['userlogin']);

 }
}
