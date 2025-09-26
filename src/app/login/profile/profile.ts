import { AfterContentChecked, Component, Injectable, Input, OnInit } from '@angular/core';
import { CrudService } from '../../crud-service';
import { Users } from '../../users';
import { Signin } from '../signin/signin';
import { SharedData } from '../../shared-data';
import { DeleteAccount } from "../delete-account/delete-account";
import { UpdateAccount } from "../update-account/update-account";
import { UpdateSuccessful } from "../update-successful/update-successful";
import { DeleteAccountSuccessful } from "../delete-account-successful/delete-account-successful";

@Component({
  selector: 'app-profile',
  imports: [DeleteAccount, UpdateAccount, UpdateSuccessful, DeleteAccountSuccessful],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
@Injectable({
  providedIn:'root'
})
export class Profile implements AfterContentChecked{
  constructor(private crud:CrudService,public share:SharedData){}
  update_mode=false
  delete_mode=false
only_view_mode:boolean=true
user_name:any=''
email_id:any=''
mail_check:any=''
account_update:boolean=false
sueccesful_delete=false
id_user=SharedData.id_val
// @Input() mail_b:any=''
//data:any=''
view_data(){
this.user_name=SharedData.get_user_name
this.email_id=SharedData.get_login_mail
}
cancel_button(){
  this.only_view_mode=true
  this.update_mode=false
  this.delete_mode=false
}
edit_mode(){
  if(this.user_name=='User' || this.email_id=='user@gmail.com'){
  this.update_mode=false
  this.only_view_mode=true
  }
  else{
this.update_mode=!this.update_mode
this.only_view_mode=!this.only_view_mode
  }
}
account_delete_mode(){
  if(this.user_name=='User' || this.email_id=='user@gmail.com'){
  this.update_mode=false
  this.only_view_mode=true
  this.delete_mode=false
  }
  else{
this.update_mode=!this.update_mode
this.only_view_mode=!this.only_view_mode
this.delete_mode=!this.delete_mode
  }
}
get_data_account(){
  this.crud.fetch_data().subscribe(view=>{
    for(let i:number=0;i<view?.length;i++){
      if(SharedData.id_val==view[i].id){
        this.user_name=view[i].name
        this.email_id=view[i].email
        break
      }
    }
  })
}
ngAfterContentChecked(): void {
  this.view_data()
 // this.button_disable()
}
delete_user(){
  this.share.account_remove(SharedData.id_val)
  SharedData.get_user_name="User"
  SharedData.get_login_mail="user@gmail.com"
}
// ngAfterContentChecked(): void {
//     this.button_disable()
// }
}
