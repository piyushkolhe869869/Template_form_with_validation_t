import { Component, OnInit } from '@angular/core';
import { ServicesService } from './commaon/services.service';
import { Student } from './student';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Studentform';
  pincode:any;
   constructor(public cs:ServicesService){}
 
  
   
   stu:Student={
     firstname: (''),
     middelename: (''),
     lastname: (''),
     email: '',
     gender: '',
     Address: '',
     city: '',
     pincode: '',
     mobno: '',
     age: '',
     panno: undefined
   }
  
   
  submit(){
    this.cs.savestu(this.stu).subscribe()
  }
}
