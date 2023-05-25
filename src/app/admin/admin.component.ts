import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavsideService } from '../navside.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  collapses: boolean=true;
sticky: any;
position: any;

  constructor(public router:Router, public navsideservice:NavsideService,public menuservice:MenuService){

  }
ngOnInit(): void {

}

collopse(){
  this.collapses=!this.collapses
  console.log(this.collapses);

}


}

