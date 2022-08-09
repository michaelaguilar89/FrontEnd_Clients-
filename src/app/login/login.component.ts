import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  loginForm:FormGroup;
  constructor(private service:AuthService,
    private router:Router,
    private fb:FormBuilder) { 

      a:Number;

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
  
  ngOnInit(): void {
    if( localStorage.getItem('userName')!=null){
      alert('Acceso denegado,primero debe cerrar sesion para acceder a esta pagina');
      history.back();
    }
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
