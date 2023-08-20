import { Component, OnInit } from '@angular/core';
import { ServicesService } from './commaon/services.service';
import { Student } from './student';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Studentform';
 



   constructor(public cs:ServicesService){}


   emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

    
    stu =new Student();
savedata(){
    this.cs.savestu(this.stu).subscribe()
   }
}


