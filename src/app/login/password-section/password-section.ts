import { Component, Input } from '@angular/core';
import { SharedData } from '../../shared-data';
import { CrudService } from '../../crud-service';


@Component({
  selector: 'app-password-section',
  imports: [],
  templateUrl: './password-section.html',
  styleUrl: './password-section.css'
})
export class PasswordSection {
  static password_valid:boolean=false
   constructor(public share:SharedData,private crud:CrudService){   
    }
// get_mail():any{
// let mail=
//   //
//   // alert(this.share.user_email)
//   return mail
// }
@Input() mail:any=''
email_change_button(){
this.share.passwoord=false
}
regex_check(){
  let regex_passwd=/[<>\\/"'(){}[\]]/
  let passwd=document.getElementById("passwd") as HTMLInputElement
  if(regex_passwd.test(passwd.value)==true){
    passwd.value=""
  }
}
take:number=0
username:any=''
paswd_match:boolean=true
match_pass:boolean=false
match_passwd(passwd_match:string){
let p_m:string=this.share.encoding_passwd(passwd_match)
this.crud.fetch_data().subscribe(confirmpaswd=>{
  for(let i:number=0;i<confirmpaswd?.length;i++){
    if(this.mail===confirmpaswd[i].email){
    this.take=i
      break
    }
  }
  if(p_m===confirmpaswd[this.take].encrypted_passwd){
    this.match_pass=true
    this.paswd_match=true
    PasswordSection.password_valid=true
    this.username=confirmpaswd[this.take].name
    this.share.user_name=this.username
  }
  else{
    this.match_pass=false
    this.paswd_match=false
  }
})
}
signin_button(){
let passwd=document.getElementById("passwd") as HTMLInputElement
 this.match_passwd(passwd?.value)
 //this.share.account_set=true
}
}
