import { Routes } from '@angular/router';
import { Electronics } from './categories/electronics/electronics';
import { Toys } from './categories/toys/toys';
import { Fashion } from './categories/fashion/fashion';
import { Grocery } from './categories/grocery/grocery';
import { Books } from './categories/books/books';
import { TodaysDeals } from './categories/todays-deals/todays-deals';
import { HomeKitchen } from './categories/home-kitchen/home-kitchen';
import { PageNotFound } from './categories/page-not-found/page-not-found';
import { Signin } from './login/signin/signin';
import { Signup } from './login/signup/signup';
import { ForgetPassword } from './login/forget-password/forget-password';
import { Profile } from './login/profile/profile';

export const routes: Routes = [
    {path:'',redirectTo:'',pathMatch:"prefix"},
    {path: 'electronics',component:Electronics},
    {path: 'toys',component:Toys},
     {path: 'fashion',component:Fashion},
     {path: 'grocery',component:Grocery},
     {path: 'books',component:Books},
     {path: "today's deals",component:TodaysDeals},
     {path:"home",component:HomeKitchen},
     {path:"signin",component:Signin},
     {path:"signup",component:Signup},
     {path:"reset",component: ForgetPassword},
     {path:"profile",component:Profile},
     {path:'not_found',component:PageNotFound}
];
