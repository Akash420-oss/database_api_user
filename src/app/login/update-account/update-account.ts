import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Profile } from '../profile/profile';
import { FormsModule } from "@angular/forms";
import { SharedData } from '../../shared-data';
import { CrudService } from '../../crud-service';

@Component({
  selector: 'app-update-account',
  imports: [FormsModule],
  templateUrl: './update-account.html',
  styleUrl: './update-account.css'
})
export class UpdateAccount implements OnInit,AfterContentChecked {


constructor(public cmp:Profile,public share:SharedData,private crud:CrudService){

}
email_val:any=''
name_val:any=''
passwd:any=''
valid_mail:boolean=true
valid_name:boolean=true
passwd_match:boolean=true
data_edit(){
  this.email_val=document.getElementById("email-input") as HTMLInputElement
  this.name_val=document.getElementById("name-input") as HTMLInputElement
  this.email_val.value=SharedData.get_login_mail
  this.name_val.value=SharedData.get_user_name
}
regex_check(){
  this.passwd=document.getElementById("password-edit") as HTMLInputElement
  let regex_name_pattern=/[0-9{}@#$%^&*[\]\\/().,<>?'"]/
  let regex_mail=/[{}<>[\]\\/':;"#$%^&*()]/
  let regex_passwd=/[{}<>[\]\\/()]/
  if(regex_name_pattern.test(this.name_val.value)==true){
    this.name_val.value=""
  }
    if(regex_mail.test(this.email_val.value)==true){
    this.email_val.value=""
  }
    if(regex_passwd.test(this.passwd.value)==true){
    this.passwd.value=""
  }
}
disable_button(){
this.share.email_check(this.email_val.value)
this.valid_mail=(!this.email_val.value.endsWith("@gmail.com"))?false:true
let save_button=document.getElementById("save") as HTMLButtonElement
if(this.email_val.value=='' || this.name_val.value=='' || SharedData.mail_exist==true || this.passwd.value=='' ||this.valid_mail==false){
save_button.disabled=true
}

else{
  save_button.disabled=false
}
}
ngOnInit(): void {
  this.data_edit()
}

save_changes(){
this.valid_name=(!this.email_val.value)?false:true
if(this.share.encoding_passwd(this.passwd.value)!==SharedData.passwd){
  this.passwd_match=false
  this.passwd.value=""
}
else{
  this.passwd_match=true
  this.crud.update_password(SharedData.id_val,{
    id:SharedData.id_val,
    name:this.name_val.value,
    email:this.email_val.value,
    encrypted_passwd:SharedData.passwd
  }).subscribe(res=>this.cmp.account_update=true)
//   setTimeout(()=>this.passwd.value="",0)
}
//console.log(this.valid_mail)
}
ngAfterContentChecked(): void {
//let save_button=document.getElementById("save") as HTMLButtonElement
  this.disable_button()
//    if(this.share.encoding_passwd(this.passwd.value)!==SharedData.passwd){
//   save_button.disabled=true
//  }
//  else{
//   save_button.disabled=false
//  }
}

}
