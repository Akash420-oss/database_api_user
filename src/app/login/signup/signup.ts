import { AfterContentChecked, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, FormSubmittedEvent } from '@angular/forms';
import { SharedData } from '../../shared-data';
import { Router } from '@angular/router';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { CrudService } from '../../crud-service';
import { SuccessfulSignup } from '../successful-signup/successful-signup';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,SuccessfulSignup],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements AfterContentChecked{
  reactive:FormGroup;
  successful_signup:boolean=false
  constructor(public share_mess:SharedData,private route:Router,private hc:HttpClient,private crud:CrudService){
  this.reactive=new FormGroup({
full_name: new FormControl(''),
email: new FormControl(''),
passwd: new FormControl(''),
confirm_passwd: new FormControl('')
 })
}
email_exist:boolean=false
email_checking:boolean=true
passwd_match_char:boolean=true
passwd_match(){
  let password=document.getElementById("password") as HTMLInputElement
  let confirmPassword=document.getElementById("confirmPassword") as HTMLInputElement
  if(password.value!==confirmPassword.value){
    this.passwd_match_char=false
    this.share_mess.error_message("confirmPassword")
  }
  else{
    this.passwd_match_char=true
    let input_str=document.getElementById("confirmPassword") as HTMLInputElement
    input_str.classList.remove("is-invalid")
  }
}

  email_check(str:string){
   this.crud.fetch_data().subscribe(res=>{
  for(let i:number=0;i<res?.length;i++){
  if(str===res[i].email){
    this.email_exist=true
    break
  }
  else{
    this.email_exist=false
  }
  }
  })
  }
ngAfterContentChecked(): void {
let button_val=document.getElementById("button_call") as HTMLButtonElement
this.passwd_match()
this.email_check(this.reactive.controls['email'].value)
if(this.reactive.controls['full_name'].value!='' && this.reactive.controls['email'].value!='' && this.reactive.controls['passwd'].value!='' && this.reactive.controls['confirm_passwd'].value!='' &&this.email_exist==false){
if(this.reactive.controls['passwd'].value?.length>7 && this.reactive.controls['confirm_passwd'].value?.length>7){
  button_val.disabled=false
}
}
else{
button_val.disabled=true
}
}
regex_check(){
let regex_pattern_full_name=/[;:/+)(#@~_`%$<?,.\\>"'!^&*--={\][}0-9]/
let regex_pattern_email=/[;:/+)(#~`%$<?,\\>"'!^&*--={\][}]/
let regex_passwd=/[<>\\/"'(){}[\]]/
if(regex_pattern_full_name.test(this.reactive.controls['full_name'].value)){
 
this.reactive.controls['full_name'].setValue("")
}
if(regex_pattern_email.test(this.reactive.controls['email'].value)){
this.reactive.controls['email'].setValue("")
}
if(regex_passwd.test(this.reactive.controls['passwd'].value)){
this.reactive.controls['passwd'].setValue("")
}
if(regex_passwd.test(this.reactive.controls['confirm_passwd'].value)){
this.reactive.controls['confirm_passwd'].setValue("")
}
}
id_val:any
get_id_val(email:any){
  this.crud.fetch_data().subscribe(id_take=>{
    for(let i:number=0;i<id_take?.length;i++){
      if(email===id_take[i].email){
         this.id_val=id_take[i].id
         break
      }
    }
  })
}
static signup:boolean=false
set_form(){
let email=document.getElementById("email") as HTMLInputElement
let passwd_id=document.getElementById("ConfirmPassword") as HTMLInputElement
sessionStorage?.removeItem("valid_mail")
this.email_check(email.value)
console.log(this.email_exist)
if(email.value.endsWith("@gmail.com") && this.passwd_match_char==true){
  email?.classList.remove("is-invalid")
    this.email_checking=true
  passwd_id?.classList.remove("is-invalid")
console.log(this.reactive.value)
let encrypted_paswd:string=this.share_mess.encoding_passwd(this.reactive.controls['passwd'].value)
this.crud.send_data_signup({
  name: this.reactive.controls["full_name"].value,
  email: this.reactive.controls["email"].value,
  encrypted_passwd: encrypted_paswd
}).subscribe(id_take=>{SharedData.id_val=id_take.id 
  SharedData.passwd=id_take.encrypted_passwd})
SharedData.get_user_name=this.reactive.controls["full_name"].value
SharedData.get_login_mail=this.reactive.controls["email"].value

Signup.signup=true
this.share_mess.user_name=SharedData.get_user_name
this.share_mess.account_set=true
this.successful_signup=true

  this.reactive.reset()
}
else{
  if(this.reactive.controls['email'].errors){
  this.share_mess.error_message("email")
  this.email_checking=false
  }
  if(this.passwd_match_char==false){
  this.share_mess.error_message("confirmPassword")
  }
  this.successful_signup=false
  this.reactive.reset()
}
}
signin_button(){
  this.route.navigateByUrl("/signin")
}
}

