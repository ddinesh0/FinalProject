import { Patient } from "./patient";


export class Appointment {

  id!:number;
  age!:number;
  dates!:Date;
  disease!:string;
  patient!: Patient[];
}


