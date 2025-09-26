import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";
import { Header } from '../../header/header';
import { SharedData } from '../../shared-data';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterModule],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound{
//  let regex=new RegExp()
constructor(private route:Router,private share:SharedData){}
// ngOnInit(): void {
//   if(this.route.url!="/"){
//     this.check=""
//   }
//   else{
//      this.check="not_found"
//   }
// }

home(){
// let input_tag=document.getElementById("input_tag") as HTMLInputElement;
// if(input_tag?.value){
//   input_tag.value=
//   console.log(input_tag.value)
// }
 this.share.input_str=""
  this.route.navigateByUrl('')
    
}
}
