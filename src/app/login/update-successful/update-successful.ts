import { Component } from '@angular/core';
import { SharedData } from '../../shared-data';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-update-successful',
  imports: [],
  templateUrl: './update-successful.html',
  styleUrl: './update-successful.css'
})
export class UpdateSuccessful {
constructor(private cmp:Profile, public share:SharedData){}
return_to_profile(){
  this.cmp.account_update=false
  this.cmp.only_view_mode=true
  this.cmp.delete_mode=false
  this.cmp.update_mode=false
  this.cmp.get_data_account()
  this.share.goto_profile()
}
}
