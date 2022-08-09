import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private fb:FormBuilder,
              private service:AuthService,
              private router:Router) { 

    this.registerForm= this.fb.group({
      userName:['',Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])],
      password:['',Validators.compose(
        [Validators.required,
         Validators.minLength(6),
         Validators.maxLength(30)]
        
      )]
    })
  }

  ngOnInit(): void {
    if( localStorage.getItem('userName')!=null){
      alert('Cerrando sesion...');
      this.service.logout('gotoRegister');
    }

  }
  onSubmit(){
    this.service.register(this.registerForm.value).subscribe((data:any)=>{
      localStorage.setItem('userName',data.result.userName);
      localStorage.setItem('token_value',data.result.token);
      
      alert('Mensaje:'+data.displayMessages);
      this.router.navigate(['clientes']);
    },(errorData)=>(
      alert(errorData.error.displayMessages)
      
      ))
  }

}
