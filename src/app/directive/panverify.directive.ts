import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPanverify]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting: PanverifyDirective ,multi : true
  }]
})
export class PanverifyDirective {
  
  @Input("appPanverify")   controls! :string[]
  constructor() { }

  validate(stu: AbstractControl<any,any>) :ValidationErrors|null {
 if(this.controls){

  const lastname=this.controls[0]
  const panId=this.controls[1]

  const lastnameControl=stu.get(lastname)?.value?.slice(0,1).toLowerCase()
  const panIdControl=stu.get(lastname)?.value?.slice(4,5).toLowerCase()

  if(lastnameControl===panIdControl){
    return null
  }
  return{panId:true}
 }
 return null
}
}