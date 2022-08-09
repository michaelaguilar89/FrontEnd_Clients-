import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.css']
})
export class DeleteClienteComponent implements OnInit {

  id:any;

  cliente = {
    nombre:'',
    apellidos:'',
    telefono:'',
    direccion:''
  }
  constructor(private service:ClienteService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('token_value')===null){
      this.router.navigate(['login']);
      alert('Acceso denegado, usuario no identificado');
      
    }

    this.id= this.route.snapshot.paramMap.get('id');
    this.service.getClienteById(this.id).subscribe((data:any)=>{
      console.log(data);
      this.cliente.nombre=data.result.nombre;
      this.cliente.apellidos=data.result.apellidos;
      this.cliente.telefono=data.result.telefono;
      this.cliente.direccion=data.result.direccion;
    } )
  }
  confirmar(){
    this.service.deleteCliente(this.id).subscribe((data:any)=>{
      this.router.navigate(['clientes']);
    },  (errorData)=>(alert('Error :' +errorData.error.displayMessages+' , '+errorData.error.errorsMessages))
    )
   
  }

  cancelar(){
    this.router.navigate(['clientes']);
  }

}
