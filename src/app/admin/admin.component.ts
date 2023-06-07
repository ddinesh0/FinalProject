import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
isMenuOpen: boolean;

isScrolled=false;
Patient: any;

  constructor(public router:Router,){

  }
  @ViewChild('blueheader') blueheader!: ElementRef<HTMLElement>;
ngOnInit(): void {
  this.onWindowScroll();

}

collopse(){
  this.collapses=!this.collapses
  console.log(this.collapses);

}
@HostListener('window:scroll')

onWindowScroll() {

const scrollY = window.scrollY;
if (this.blueheader) {
const element = this.blueheader.nativeElement;
console.log(element);

if (scrollY >= 10) {

element.classList.remove('bluebar_expand');
console.log(  element.classList.remove('bluebar_expand'));


element.classList.add('bluebar_collapse');
console.log( element.classList.add('bluebar_collapse'));


} else {

element.classList.remove('bluebar_collapse');

element.classList.add('bluebar_expand');

}

}

}

}

