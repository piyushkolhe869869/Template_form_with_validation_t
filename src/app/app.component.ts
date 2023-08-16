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


   stu = new Student();




  savedata(){
    this.cs.savestu(this.stu).subscribe()
  }
}
