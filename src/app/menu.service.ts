import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isMenu=new BehaviorSubject<boolean>(false);
  isMenu$=this.isMenu.asObservable();

  toggleSidebar():void{
    const currentvalue=this.isMenu.value;
    this.isMenu.next(!currentvalue);
  }

  constructor() { }
}
