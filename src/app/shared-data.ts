import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedInterface } from './shared-interface';
import { timestamp } from 'rxjs';
import { CrudService } from './crud-service';

@Injectable({
  providedIn: 'root'
})
export class SharedData implements SharedInterface{
  static get_user_name: string | undefined="User";
  static mail_exist:boolean=false
  static login_val:boolean=false
  constructor(private route: Router,private crud:CrudService) { }
  login: boolean = false
  input_str: string = ""
  user_name:any="User"
  static get_login_mail:any="user@gmail.com"
  static id_val:any=''
  static passwd:any=''
  account_set:boolean=false
  error_message(id:string) {
    let input_err = document.getElementById(id) as HTMLInputElement;
    input_err.removeAttribute("class")
    input_err.setAttribute('class', "form-control is-invalid")
  }
  signup_section() {
    this.route.navigateByUrl("/signup")
     this.login=false
  }
home_page(){
  this.route.navigateByUrl('')
  //sessionStorage?.removeItem("valid_mail")
}
reset_passwd(){
  this.route.navigateByUrl("/reset")
}
encoding_passwd(paswd:any):string{
let first_key:any=[]
let last_key:any=[]
let genrate_key:any=[]
let count:number=4
let count2:number=0
  for(let i:number=0;i<paswd.length;i++){
      if(i<=3){
  first_key.push(<number>paswd.charCodeAt(i).toString(10)^<number>paswd.charCodeAt(count).toString(10))
      count++
      }
      else{
 last_key.push(first_key[count2]^paswd.charCodeAt(count2).toString(10))
 count2++
      }

  }
  genrate_key.push(`${first_key},${last_key}`)
  let key_change:any=genrate_key.toString().replaceAll(',','')
  //For Ascii hexadecimal:{
  // genrate_key.length=0
  // for(let i:number=0;i<key_change.length;i++){
  //   genrate_key.push(key_change.charCodeAt(i).toString(16))
  // }
  //}
  // console.log(key_change)
  let genrate_keyt_str:string=new Date(Number(key_change)).toUTCString().toString()
  return genrate_keyt_str
}
passwoord:boolean=false
exist_mail:boolean=true
email_check(str:string){
this.crud.fetch_data().subscribe(data=>{
  for(let i:number=0;i<data?.length;i++){
    if(str===data[i].email){
      SharedData.get_login_mail=str
      SharedData.get_user_name=data[i].name
      SharedData.id_val=data[i].id
      SharedData.mail_exist=true
      SharedData.login_val=true
      SharedData.passwd=data[i].encrypted_passwd
      this.passwoord=true
      this.exist_mail=true
      break
    }
else{
  this.passwoord=false
  this.exist_mail=false
  SharedData.mail_exist=false
}
}
})
}
goto_profile(){
  this.route.navigateByUrl("/profile")
}
signin(){
  this.route.navigateByUrl('/signin')
  this.passwoord=false
}
account_remove(id:any){
  this.crud.delete_account(id).subscribe(res=>console.log(res))
  SharedData.get_login_mail="user@gmail.com"
  SharedData.get_user_name="User"
}
}
