import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userInterface } from './Interfaces/userInterface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // baseUrl :string ='https://localhost:5001/api/Users/';
    baseUrl : string='https://www.backendclients.somee.com/api/Users/';
  
  
  constructor(private http:HttpClient,
              private router:Router) {

   }
   register(user:userInterface){
    return this.http.post(this.baseUrl+'Register',user);
   }
   login(user:userInterface){
    return this.http.post(this.baseUrl+'Login',user)
   }


   logout(){
    console.log('LogOut en auth service');
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
    this.router.navigate(['login']);
    

   }

   get getUserName(){
        return localStorage.getItem('userName');
   }
   get IsAutenticado(){
        return localStorage.getItem('token_value');
   } 
}
