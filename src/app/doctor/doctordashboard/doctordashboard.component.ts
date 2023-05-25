import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/menu.service';
import { NavsideService } from 'src/app/navside.service';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent  implements OnInit{
  collapses: any;

  constructor(public router:Router, public navsideservice:NavsideService,public menuservice:MenuService){}



ngOnInit(): void {

}
collopse() {
  this.collapses=!this.collapses
  console.log(this.collapses);




}

}
