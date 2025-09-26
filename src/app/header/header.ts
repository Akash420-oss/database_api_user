import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { App } from '../app';
import { Sidebar } from '../categories/sidebar/sidebar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedData } from '../shared-data';
import { SharedInterface } from '../shared-interface';
import { NamePipe } from "../name-pipe";
import { CrudService } from '../crud-service';
import { PasswordSection } from "../login/password-section/password-section";
import { Signup } from '../login/signup/signup';

@Component({
  selector: 'app-header',
  imports: [Sidebar, RouterLink, RouterLinkActive, FormsModule, NamePipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements AfterContentChecked{
  passwd: boolean=false;
  constructor(private route: Router,public share:SharedData,private crud:CrudService) { 
  let location=navigator.geolocation;
location.getCurrentPosition(this.success,this.error)
  }
  input_str:string=""
  side: boolean = false
  type_text: string = 'text'
  email_str:string=""
  headers = new App()
  success(pos:any){
    let ps=pos.coords;
    console.log(`Latitude - ${ps.latitude}`)
    console.log(`Longitude- ${ps.longitude}`)
  }
  error(val:any){
if(val.code==1){
  console.log("Shut down web")
}
  }
ngAfterContentChecked(): void {
  if(SharedData.login_val==true){
  this.share.user_name=(PasswordSection.password_valid)?SharedData.get_user_name:"User"
  }
  if(Signup.signup==true){
    this.share.user_name=(Signup.signup)?SharedData.get_user_name:"User"
  }
}
    login_button() {
      if(this.share.user_name=='User' || this.share.user_name=="Sign in"){
        this.share.login = !this.share.login
      }
      else{
       this.share.goto_profile()
      }
  }

  side_button() {
if(this.share.login===true){
  this.share.login=false
}
    if (this.side === false) {
      this.side = true;
      setTimeout(() => {
        let butt_close = document.getElementById("side_butt") as HTMLButtonElement
        butt_close?.addEventListener('click', () => this.side = false)
      }, 200)
    }
  }
  string_cheker() {
    let str: any = this.check_string()
    let regex = new RegExp("Electronics|electronics|toys|Toys|books|Books|Fashion|fashion|home|Home|Kitchen|kitchen|grocery|Grocery", "g")
    if (regex.test(str)) {
      let input_valu = regex.exec(str)
      if (input_valu?.[0] != undefined) {
        if (input_valu?.[0] == "Electronics" || input_valu?.[0] == "electronics") {
          this.sites_button('electronics')
                  this.share.login=false
        }
        else if (input_valu?.[0] == "Books" || input_valu?.[0] == "books") {
          this.sites_button("books")
                this.share.login=false
        }
        else if (input_valu?.[0] == "Grocery" || input_valu?.[0] == "grocery") {
          this.sites_button("grocery")
                  this.share.login=false
        }
        else if (input_valu?.[0] == "fashion" || input_valu?.[0] == "Fashion") {
          this.sites_button("fashion")
                  this.share.login=false
        }
        else if (input_valu?.[0] == "Kitchen" || input_valu?.[0] == "kitchen" || input_valu?.[0] == "Home" || input_valu?.[0] == "home") {
          this.sites_button("home")
                  this.share.login=false
        }
        else if (input_valu?.[0] == "Toys" || input_valu?.[0] == "toys") {
          this.sites_button("toys")
                  this.share.login=false
        }
        else {
          this.route.navigateByUrl('not_found')
                  this.share.login=false
        }
      }
      else {
        let elec_reg = new RegExp("Electronics|electronics", "g")
        let toys_reg = new RegExp("Toys|toys", "g")
        let books_reg = new RegExp("Books|books", "g")
        let fashion_reg = new RegExp("Fashion|fashion", "g")
        let grocery_reg = new RegExp("Grocery|grocery", "g")
        let home_reg = new RegExp("Home|home|Kitchen|kitchen", "g")
        if (elec_reg.test(str) == true) {
          this.sites_button('electronics')
                  this.share.login=false
        }
        else if (toys_reg.test(str) == true) {
          this.sites_button('toys')
                  this.share.login=false
        }
        else if (books_reg.test(str) == true) {
          this.sites_button('books')
                  this.share.login=false
        }
        else if (fashion_reg.test(str) == true) {
          this.sites_button('fashion')
                  this.share.login=false
        }
        else if (home_reg.test(str) == true) {
          this.sites_button('home')
                  this.share.login=false
        }
        else if (grocery_reg.test(str) == true) {
          this.sites_button('grocery')
                  this.share.login=false
        }

      }
    }
else{
           this.route.navigateByUrl('not_found')
                   this.share.login=false
        }
  }
  check_string(): string {
    let str: string[] = [];
    for (let i: number = 0; i < this.share.input_str.length; i++) {
      str[i] = this.share.input_str[i]
      if (str[i] == ';' || str[i] == '<' || str[i] == '>' || str[i] == ':' || str[i] == '(' || str[i] == ')' || str[i] == '$' || str[i] == '&' || str[i] == '?' || str[i] == '\'' || str[i] == '\"' || str[i] == ',' || str[i] == '+' || str[i] == '-' || str[i] == '{' || str[i] == '}' || str[i] == '[' || str[i] == ']' || str[i] == '0' || str[i] == '1' || str[i] == '2' || str[i] == '3' || str[i] == '4' || str[i] == '5' || str[i] == '6' || str[i] == '7' || str[i] == '8' || str[i] == '9' || str[i] == '%' || str[i] == '#' || str[i] == '^' || str[i] == '*' || str[i] == '=' || str[i] == '_' || str[i] == '.') {
        str.pop()
      }
    }
    return str.toString().replaceAll(",", '')
  }
  check: boolean = false
  check_button() {
    this.check = !this.check
    if (this.check == true) {
      console.log(this.check_string())
      setTimeout(() => this.share.input_str = "", 0)
    }

  }
  search_button() {
    let str: string = this.share.input_str;
    if (str.length !== 0) {
      this.string_cheker()
    }
    else {
      let select_str: string = this.onChange();
      this.share.input_str = ""
      if (select_str == "Toys & Games") {
        this.sites_button('toys')
                this.share.login=false
      }
      else if (select_str == "Electronics") {
        this.sites_button('electronics')
                this.share.login=false
      }
      else if (select_str == "Home & Kitchen") {
        this.sites_button('home')
                this.share.login=false
      }
      else if (select_str == "Books") {
        this.sites_button('books')
                this.share.login=false
      }
      else if (select_str == "Fashion") {
        this.sites_button('fashion')
                this.share.login=false
      }
      else if (select_str == "Today's Deals") {
        this.sites_button("today's deals")
                this.share.login=false
      }
      else {
        this.sites_button("")
        this.share.login=false
      }
    }

    // if(str==="electronics"){
    //   alert("Electronics")
    // }
    // else{
    //   alert("you are searching something which is not added")
    // }
  }
  onChange(): string {
    this.share.input_str = ""
    let select_item = document.getElementById('select_item') as HTMLSelectElement
    return select_item.value
  }
// ngAfterContentChecked(): void {
//   this.user_name=sessionStorage?.getItem("name")
//   sessionStorage?.removeItem("name")
// }
  sites_button(site: string) {
      if (site == "toys") {
      this.route.navigateByUrl("toys")
      this.share.input_str=""
    }
    else if (site == "electronics") {

      this.route.navigateByUrl("electronics")
            this.share.input_str=""
    }
    else if (site == "books") {

      this.route.navigateByUrl("books")
            this.share.input_str=""
    }
    else if (site == "grocery") {

      this.route.navigateByUrl("grocery")
            this.share.input_str=""
    }
    else if (site == "fashion") {
      this.route.navigateByUrl("fashion")
            this.share.input_str=""
    }
    else if (site == "home") {

      this.route.navigateByUrl("home")
            this.share.input_str=""
    }
    else if (site == "today's deals") {

      this.route.navigateByUrl("today's deals")
            this.share.input_str=""
    }
    else{
       this.share.input_str=""
       this.route.navigateByUrl('')
    }

  }
  check_url(): string {
    let val = this.route.url;
    let i = ""
    if (val !== "/") {
      i = val
    }
    else {
      i = val
    }
    return i
  }
    regex_check(){
    let regex=/[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~`]/;
    if(regex.test(this.email_str)===true){
setTimeout(()=>this.email_str="",0)
    }
  }
  //error_msg:boolean=false
//   change_error_message(): void {
//     if(this.email_str.endsWith("@gmail.com")){
//       let email=document.getElementById("email") as HTMLInputElement
//       email.classList.remove("is-invalid")
//       this.error_msg=false
//        this.share.email_check(email?.value)
   
//      this.crud.fetch_data().subscribe(data=>{
//   for(let i:number=0;i<data?.length;i++){
//     if(email?.value===data[i].email){
//       this.passwd=true
//       this.mail_b=email?.value
//        sessionStorage.setItem("valid_mail",email?.value)
//       break
//     }

// }
// })
     
//       // sessionStorage.setItem("valid_mail",email?.value)
//       this.route.navigateByUrl('signin')
//        this.login_button()
     
//    this.email_str=""
 
//     }
//     else{
//       this.share.error_message("email")
//       this.error_msg=true
//       this.email_str=""
//     }
//   }
goto_signin(){
        this.route.navigateByUrl('signin')
       this.login_button()
}
  // get_val():any{
  //   let val=sessionStorage?.getItem("name")
  //   return val
  // }
}
