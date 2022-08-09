import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms'
import { ClienteService } from '../cliente.service';
//import { AppRoutingModule } from '../app-routing.module';
import { Router} from '@angular/router';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit  {

 

  constructor(private service:ClienteService,
              private router:Router,
              ) { }

  clienteForm = new FormGroup({
    nombre : new FormControl('',Validators.required),
    apellidos : new FormControl('',Validators.required),
    direccion : new FormControl('',Validators.required),
    telefono : new FormControl('',Validators.required)
  });
  
  ngOnInit(): void {
    if(localStorage.getItem('token_value')===null){
      this.router.navigate(['login']);
      alert('Acceso denegado, usuario no identificado');
    }
  }

  onSubmit(){
    console.log(this.clienteForm.value);

    this.service.crearCliente(this.clienteForm.value).subscribe((data:any )=>{

      alert("Cliente Creado");
      this.router.navigate(['clientes']);
      
   })

  }

}
