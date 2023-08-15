import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http:HttpClient) {}
  s:Student={
    firstname: undefined,
    middelename: undefined,
    lastname: undefined,
    email: undefined,
    gender: undefined,
    Address: undefined,
    city: undefined,
    pincode: undefined,
    mobno: undefined,
    age: undefined,
    panno: undefined
  }


  

   
  savestu(st:Student){
    alert(st.firstname)
    console.log(st.firstname)
    console.log(st.middelename)
    console.log(st.lastname)
    console.log(st.email)
    console.log(st.pincode)
    console.log(st.city)
    console.log(st.gender)
    console.log(st.Address)
    console.log(st.age)
    return this.http.post("",st);
  }
   

     



}
