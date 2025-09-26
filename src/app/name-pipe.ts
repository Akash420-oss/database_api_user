import { AfterContentChecked, Pipe, PipeTransform } from '@angular/core';
import { SharedData } from './shared-data';

@Pipe({
  name: 'fullname',
  pure: false
})
export class NamePipe implements PipeTransform {
constructor(private share:SharedData){}
  transform(value:any): any {
   //setTimeout(()=> sessionStorage?.removeItem("name"),5000)
   if(value=='User'){
   // value='Sign in'
   this.share.user_name='Sign in'
    return 'Sign in'
   }
   else if(value!='User' || value!='Sign in'){
    //sessionStorage?.removeItem("name")
    this.share.user_name=value
    return value;
  }
  }
}
