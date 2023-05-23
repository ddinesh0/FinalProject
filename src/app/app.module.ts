import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './signin/signin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';

import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { DoctorupdateComponent } from './doctorupdate/doctorupdate.component';
import { MyspaceComponent } from './myspace/myspace.component';
import { AdminupdateComponent } from './admin/adminupdate/adminupdate.component';
import { DoctordashboardComponent } from './doctor/doctordashboard/doctordashboard.component';

import { PatientupdateComponent } from './patient/patientupdate/patientupdate.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientviewComponent } from './patient/patientview/patientview.component';
import { DoctorspaceComponent } from './doctorspace/doctorspace.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AppointmentlistComponent } from './appointment/appointmentlist/appointmentlist.component';
import { DoctorpathComponent } from './doctordetails/doctorpath/doctorpath.component';



@NgModule({
  declarations: [
    AppComponent,

    WelcomeComponent,
    SignupComponent,
    AdminComponent,
    SigninComponent,
    DoctorComponent,
    PatientComponent,
    DoctordetailsComponent,
    DoctorupdateComponent,
    MyspaceComponent,
    AdminupdateComponent,
    DoctordashboardComponent,
    PatientupdateComponent,
    AppointmentComponent,
    PatientviewComponent,
    DoctorspaceComponent,
    UserloginComponent,
    AppointmentlistComponent,
    DoctorpathComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
