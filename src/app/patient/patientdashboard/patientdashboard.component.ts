import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Patient } from '../../patient';
import { PatientService } from 'src/app/patient.service';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../doctor.service';

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent implements OnInit{

  collapses: boolean=true;

  patient:Patient=new Patient();
  isMenuOpen: boolean;

  isScrolled = false;
  id: any;
Patient: any;
searchText: string='';
  filteredItems: any;
  lastValue: any;
  counterMap: { [moduleName: number]: number } = {};
  timers: any;

  constructor(private patientservice:PatientService,private route:ActivatedRoute ,private doctorservice:DoctorService){}

  @ViewChild('blueheader') blueheader!: ElementRef<HTMLElement>;

ngOnInit(): void {

  this.doctorservice.getview().subscribe(
    (data: any) => {
      // this.Patient = data;
      this.filteredItems = data;
      const lastIndex = this.filteredItems.length;
      console.log(lastIndex);

      this.lastValue = lastIndex;
      console.log(this.lastValue);

      this.startTimer(this.lastValue); // Pass the lastValue to the startTimer function
    }
  );

  this.id=this.route.snapshot.params['id'];
console.log(this.id)
this.patientservice.getbypatientid(this.id).subscribe(data=>{
  this.patient=data;
},error=>console.log(error));
this.onWindowScroll()


}

startTimer(moduleName: any) {
  const lastIndex = this.filteredItems.length ;
  this.lastValue = lastIndex;

  if (this.lastValue === moduleName) {
    this.counterMap[moduleName] = 0; // Initialize the counterMap value for moduleName to 0

    const timer = setInterval(() => {
      if (this.counterMap[moduleName] < moduleName) {
        this.counterMap[moduleName]++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust the interval as per your requirements

    this.timers[moduleName] = timer;
  }
}



OnsearchtextEntered(searchvalue:string){
  this.searchText=searchvalue;
  console.log(this.searchText);

}




public collapse(){
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
