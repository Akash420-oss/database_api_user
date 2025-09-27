import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class CrudService{
  api_url:string="https://database-api-user.onrender.com/users"
  constructor(private _http:HttpClient){}
  fetch_data(){
   return this._http.get<Users[]>(this.api_url)
  }
  send_data(data:Users){
    this._http.post(this.api_url,data).subscribe()
  }
update_password(id:any,passwd:Users){
  return this._http.put(`${this.api_url}/${id}`,passwd)
}
delete_account(id:any){
  return this._http.delete(`${this.api_url}/${id}`)
}
  send_data_signup(data:Users){
   return this._http.post<Users>(this.api_url,data)
  }
}
