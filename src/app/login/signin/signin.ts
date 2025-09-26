import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedData } from '../../shared-data';
import { PasswordSection } from "../password-section/password-section";
import { CrudService } from '../../crud-service';
import { Profile } from "../profile/profile";

@Component({
  selector: 'app-signin',
  imports: [FormsModule, PasswordSection],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})

export class Signin{
  constructor(public share:SharedData,private crud:CrudService){   
  }

  email_text=""
  email_valid=true
  mail_val=''
  regex_check(){
    let regex=/[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~`]/;
    if(regex.test(this.email_text)===true){
setTimeout(()=>this.email_text="",0)
    }
  }

email_check1(str:string){

this.crud.fetch_data().subscribe(data=>{
  for(let i:number=0;i<data?.length;i++){
    if(str===data[i].email){
      this.mail_val=str
      break
    }

}
})

}
  signin_call(){
    let input_class=document.getElementById("email") as HTMLInputElement
if(!this.email_text.endsWith("@gmail.com")){
  this.email_valid=false
  this.email_text=""
}
else{
  input_class.classList.remove("is-invalid")
   this.email_valid=true
    this.share.email_check(input_class?.value)
    
    
     this.email_check1(input_class?.value)
    this.email_text=""
}
  }


signup_trigger(){
this.share.signup_section()
}

}
