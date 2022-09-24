import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from '../cliente.service';
import { ClienteInterface } from '../Interfaces/ClienteInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  form:FormGroup;
  id:number;
  constructor(private fb:FormBuilder,
              private dialogRef:MatDialogRef<ActualizarClienteComponent>,
              @Inject(MAT_DIALOG_DATA) private data:{
                nombre:string,
                apellidos:string,
                telefono:string,
                direccion:string,
                id:number}
                ,private service:ClienteService
                ,private router:Router)
                {
                  this.id=data.id;
                  this.form=fb.group({
                    nombre:[data.nombre,Validators.required],
                    apellidos:[data.apellidos,Validators.required],
                    telefono:[data.telefono,Validators.required],
                    direccion:[data.direccion,Validators.required]
                  })
                 }



  ngOnInit(): void {
    if(localStorage.getItem('token_value')===null){
      this.router.navigate(['login']);
      alert('Acceso denegado, usuario no identificado');
    }
  }
    guardar(){
     
      this.form.value.id=this.id;
      console.log('Actualizando cliente :' +this.form.value)
      this.service.actulizarClientes(this.id,this.form.value).subscribe((data) =>{
        
        this.router.navigate(['clientes']);
        
        
      //  window.location.reload();
       
        this.dialogRef.close();
      }, (errorData)=>(alert('Error :' +errorData.error.displayMessages+' , '+errorData.error.errorsMessages))
      )
    }
    cerrar(){
      console.log('Cerrando ventana from : Cerrar()')
      this.dialogRef.close();
    }
}
