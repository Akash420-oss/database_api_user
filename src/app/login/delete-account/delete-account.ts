import { AfterContentChecked, Component } from '@angular/core';
import { Profile } from '../profile/profile';
import { SharedData } from '../../shared-data';

@Component({
  selector: 'app-delete-account',
  imports: [],
  templateUrl: './delete-account.html',
  styleUrl: './delete-account.css'
})
export class DeleteAccount implements AfterContentChecked {
constructor(public cmp:Profile,private share:SharedData){}
passwd_match=true
passwd_require=true

confirmation_delete(){
let confirm_passwd=document.getElementById("password-delete") as HTMLInputElement
if(this.share.encoding_passwd(confirm_passwd?.value)===SharedData.passwd){
  this.cmp.delete_user()
  this.passwd_match=true
  confirm_passwd.value=""
  this.cmp.sueccesful_delete=true
}
else{
  this.passwd_match=false
   confirm_passwd.value=""
   this.cmp.sueccesful_delete=false
}

}
regex_check(){
  let confirm_passwd=document.getElementById("password-delete") as HTMLInputElement
  let regex_pattern=/[<>{}()[\]\\/]/
  if(regex_pattern.test(confirm_passwd?.value)==true){
    confirm_passwd.value=""
  }
  if(confirm_passwd?.value==''){
    this.passwd_require=true
  }
  else{
    this.passwd_require=false
  }
}
ngAfterContentChecked(): void {
  this.regex_check()
}
}
