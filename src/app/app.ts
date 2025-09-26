import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Electronics } from './categories/electronics/electronics';
import { Sidebar } from './categories/sidebar/sidebar';
import { Header } from "./header/header";
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
//categories:string[]=['All Categsories','Amazon Fashion','Amazon Fresh','Amazon Pharmacy','Electronics','Toys & Games', 'Home & Kitchen']
categories={
  button_box: ['All Categsories','Books','Fashion',"Today's Deals",'Electronics','Toys & Games', 'Home & Kitchen'],
  // side_categories: ["Trending","Best Sellers","New Releases","Movers & Shakers","Amazon Basics","Customer Service","Today's Deals","Electronics","Books","Fashion","Toys & Games","Health & Personal Care"],
  nav_categories: ["Home","Today's Deals","Electronics","Books","Fashion","Toys","Grocery"]
}
side:boolean=false
select_color:string="#efefef"
side_button(){ 

    if(this.side===false){
      this.side=true;
        setTimeout(()=>{
    let butt_close=document.getElementById("side_butt") as HTMLButtonElement
    butt_close?.addEventListener('click',()=>this.side=false)
        },200) 
    }
}
// sites_button(site:string){

//     // if(this.sites===''){
//     //   // this.sites='electronics';
//     //     setTimeout(()=>{
//     // let home=document.getElementById("home") as HTMLAnchorElement
//     // home.addEventListener('click',()=>this.sites='')
//     //     },200) 
//     // }
//     // else if(this.sites==='toys')
//   this.sites=site
// }

}

