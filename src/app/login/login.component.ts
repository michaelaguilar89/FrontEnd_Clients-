import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm:FormGroup;
  constructor(private service:AuthService,
    private router:Router,
    private fb:FormBuilder) { 

      this.loginForm=this.fb.group({
        userName:['',Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
        ])],
        password:['',Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ])]
      })
    }
  
  

  login(){
      this.service.login(this.loginForm.value).subscribe((data:any) =>{
  
          localStorage.setItem('userName',data.result.userName);
          localStorage.setItem('token_value',data.result.token);
          this.router.navigate(['clientes']);
      },
      (errorData)=>(alert('Error :' +errorData.error.displayMessages+' , '+errorData.error.errorsMessages))
      );
  }

}
