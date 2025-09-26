import { AfterContentChecked, Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../crud-service';
import { SharedData } from '../../shared-data';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetSuccessful } from "../reset-successful/reset-successful";

@Component({
  selector: 'app-forget-password',
  imports: [FormsModule, ReactiveFormsModule, ResetSuccessful],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css'
})
export class ForgetPassword implements AfterContentChecked {
constructor(private route:Router,public share_data:SharedData,private crud:CrudService){}
password_match=true
passwoord_reset:number=0
input_contain:boolean=false
button_disable=true
successful_reset:boolean=false
regex_check(){
    let email_te=document.getElementById('email') as HTMLInputElement
    this.share_data.email_check(email_te.value)
    setTimeout(()=>{
    email_te.classList?.remove("is-invalid")
  },40)
    let regex=/[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~`]/;
    if(regex.test(email_te.value)===true){
      email_te.value=""
    }
    if(email_te.value!==''){
     this.input_contain=true
  }
  else{
this.input_contain=false
  }
  }
  get_mail:string=''
    
  reset(){
    let input_clas=document.getElementById("email") as HTMLInputElement
    setTimeout(()=>{
    let valid_mail
    if(input_clas.classList?.contains("is-invalid")==false){
    valid_mail=false
    this.get_mail=input_clas.value
    }
    else{
      valid_mail=true
    }
    if(valid_mail==true){
  this.passwoord_reset=0
}
else{
  this.passwoord_reset=1
}
  },40)
  }
passwd_change:string=''
take_id:any
user_name:any
get_id(mail:string){
  this.crud.fetch_data().subscribe(id_take=>{
    for(let i:number=0;i<id_take?.length;i++){
      if(mail==id_take[i].email){
        this.take_id=id_take[i].id
        this.user_name=id_take[i].name
        break
      }
    }
  // return this.take_id
  })
 
}
reset_password(){
let new_passwd=document.getElementById('new-password') as HTMLInputElement
let confirm_new_passwd=document.getElementById('confirm-password') as HTMLInputElement
if(new_passwd.value!=''||confirm_new_passwd.value!=''){
  this.crud.update_password(this.take_id,{
    id:this.take_id,
    name:this.user_name,
    email:this.get_mail,
    encrypted_passwd:this.share_data.encoding_passwd(confirm_new_passwd.value)
  }).subscribe()
  this.successful_reset=true
  this.passwoord_reset=2
  new_passwd.value=""
confirm_new_passwd.value=""
}
else{
this.button_disable=!this.button_disable
}
//this.successful_reset=true


}
regex_check_for_passwd(){
let regex_passwd=/[\"'<>\\{}[\]/]/
let new_passwd=document.getElementById('new-password') as HTMLInputElement
let confirm_new_passwd=document.getElementById('confirm-password') as HTMLInputElement
if(regex_passwd.test(new_passwd.value)==true){
  new_passwd.value=""
}
if(regex_passwd.test(confirm_new_passwd.value)==true){
  confirm_new_passwd.value=""
}
if(new_passwd.value===confirm_new_passwd.value && new_passwd.value.length>7){
confirm_new_passwd.classList?.remove("is-invalid")
this.password_match=true
this.button_disable=false
}
else{
this.password_match=false
this.button_disable=true
}
}
ngAfterContentChecked(): void {
this.get_id(this.get_mail)
}
}
