import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.css']
})
export class MyspaceComponent implements OnInit {


id!:number
  admin:Admin=new Admin();



constructor(public adminService:AdminService,public route:ActivatedRoute,
  public router:Router){

}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    console.log(params['id']);

    this.adminService.getById(params['id']).subscribe(data => {
      this.admin = data;
    }, error => console.log(error));
  });
}


  Update() {
    this.router.navigate(['/admin/adminupdate'])
    }
    Back() {
      this.router.navigate(['admin'])
      }

}
