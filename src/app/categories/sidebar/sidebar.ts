import { Component, OnInit } from '@angular/core';
import {App} from '../../app'
import { Header } from '../../header/header';
import {Router, RouterLink, RouterModule } from '@angular/router';
import { Electronics } from '../electronics/electronics';
import { Toys } from '../toys/toys';
import { routes } from '../../app.routes';
import { RouterOutlet } from "../../../../node_modules/@angular/router";
import { SharedData } from '../../shared-data';
import { NamePipe } from "../../name-pipe";

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, RouterLink, NamePipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',

})
export class Sidebar{
  from_main_compo=new App();
 
  // h=new Header()
  constructor(private route:Router,public data_share:SharedData){}
close(){
  let  button=document.getElementById("side_butt") as HTMLButtonElement;
  button.click()
}
signin(){
  if(this.data_share.user_name=='Sign in'){
    this.route.navigateByUrl("/signin")

    this.close()
  }
  else{
      this.data_share.goto_profile()
  this.close()
  }
}
go_button(str:string){
  if(str==="toys"){
    this.route.navigateByUrl("toys")
  }
  else if(str==="electronics"){
    this.route.navigateByUrl("electronics")
  }
  else if(str==="today's_deals"){
    this.route.navigateByUrl("today's_deals")
  }
    else if(str==="grocery"){
    this.route.navigateByUrl("grocery")
  }
    else if(str==="books"){
    this.route.navigateByUrl("books")
  }
    else if(str==="home"){
    this.route.navigateByUrl("home")
  }
  this.close()
}
//
// bu_cl(){
//   console.log(this.butt.side)
//  setTimeout(()=>{
// this.butt.side=false
// },2000);
// button_close(click:Event){
//   console.log(this.butt.side)
// // let off=document.getElementById('off') as HTMLDivElement;
// // let not_show=document.getElementById('not_show') as HTMLDivElement;
// // not_show.remove();
// // off.remove();

//  }

}

