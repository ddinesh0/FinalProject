import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/menu.service';
import { NavsideService } from 'src/app/navside.service';
import { PatientService } from '../../patient.service';
import { Patient } from 'src/app/patient'
import { AppointmentService } from 'src/app/appointment.service';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent  implements OnInit{


  lastValue:any;
  patient:Patient=new Patient();
  lastValue1:any;
  // collapses: boolean=false;
   isMenuOpen: boolean;

   isScrolled=false;
   counterMap: { [moduleName: number]: number } = {};
  filteredItems: any;
  timers: any;
  Patient: any;
val: any;
filteredItems1: any;



  // @Input()
  // set end(endRange: number) {
  //   this._counterSub$.next(endRange);
  // }
  // @Input() countInterval = 20;
  // public currentNumber = 0;
  // private _counterSub$ = new Subject();
  // private _onDestroy$ = new Subject();

  constructor(public router:Router, public navsideservice:NavsideService,public menuservice:MenuService,
   private patienservice:PatientService, private appoint:AppointmentService   ){}

     @ViewChild('blueheader') blueheader!: ElementRef<HTMLElement>;
     ngOnInit(): void {
      this.onWindowScroll();
      this.getview();



      this.appoint.getview().subscribe(
        (data: any) => {
          // this.Patient = data;
          this.filteredItems1 = data;
          const lastIndex1 = this.filteredItems1.length ;
          console.log(lastIndex1);

          this.lastValue1 = lastIndex1;
          console.log(this.lastValue1);

          this.startTimer1(this.lastValue1); // Pass the lastValue to the startTimer function
        }
      );




      this.patienservice.getview().subscribe(
        (data: any[]) => {
          this.filteredItems = data;
          const lastIndex = this.filteredItems.length;
          console.log(lastIndex); // Print the last index value

          this.lastValue = lastIndex; // Assign the lastIndex to lastValue
          console.log(this.lastValue);

          this.startTimer(this.lastValue); // Pass the lastValue to the startTimer function
        }
      );
     }

      startTimer(moduleName: any) {
        const lastIndex = this.filteredItems.length;
        this.lastValue = lastIndex;

        if (this.lastValue === moduleName) {
          this.counterMap[moduleName] = 0; // Initialize the counterMap value for moduleName to 0

          const timer = setInterval(() => {
            if (this.counterMap[moduleName] < moduleName) {
              this.counterMap[moduleName]++;
            } else {
              clearInterval(timer);
            }
          }, 200); // Adjust the interval as per your requirements

          this.timers[moduleName] = timer;
        }
      }

      startTimer1(moduleName1: any) {
        const lastIndex1 = this.filteredItems1.length;
        this.lastValue1 = lastIndex1;

        if (this.lastValue1 === moduleName1) {
          this.counterMap[moduleName1] = 0; // Initialize the counterMap value for moduleName to 0

          const timer = setInterval(() => {
            if (this.counterMap[moduleName1] < moduleName1) {
              this.counterMap[moduleName1]++;
            } else {
              clearInterval(timer);
            }
          }, 200); // Adjust the interval as per your requirements

          this.timers[moduleName1] = timer;
        }
      }



// collopse() {
//   this.collapses=!this.collapses
//   console.log(this.collapses);

//}

// ngOnDestroy() {
//   this._onDestroy$.next();
//   this._onDestroy$.complete();

getview(){
  this.patienservice.getview().subscribe(data=>{
    this.Patient=data;
    console.log(this.Patient);
  });
}

@HostListener('window:scroll')

onWindowScroll() {

const scrollY = window.scrollY;
if (this.blueheader) {
const element = this.blueheader.nativeElement;
console.log(element);

if (scrollY >= 30) {

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

    patientview() {
     this.router.navigate(['/patientlist'])
      }
      // myspace(){
      //   this.router.navigate(['/doctorspace/8'])
      // }

}
