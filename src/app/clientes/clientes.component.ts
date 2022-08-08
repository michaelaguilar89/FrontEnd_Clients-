import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from '../cliente.service';
import { ClienteInterface } from '../Interfaces/ClienteInterface';
import { MatDialog } from '@angular/material/dialog';
import { ActualizarClienteComponent } from '../actualizar-cliente/actualizar-cliente.component';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  dataSource: any = [];
  displayedColumns:string[]=['nombre','apellidos','direccion','telefono','Acciones'];
  
  @ViewChild(MatPaginator)paginator:MatPaginator|any;

  constructor(private service:ClienteService,
              private dialog:MatDialog,
              private router:Router) { }

  ngOnInit(): void {

    
    this.service.getClientes().subscribe((data:any)=>{
      this.dataSource= new MatTableDataSource<ClienteInterface>(data.result as ClienteInterface[]);
      this.dataSource.paginator=this.paginator;
      console.log(data);
    },
      (errorData)=>(this.router.navigate(['login']))
    
    );
  }
  actualizarCliente(cliente:ClienteInterface){
    console.log(cliente);

    this.dialog.open(ActualizarClienteComponent,{
      data:{
        nombre:cliente.nombre,
        apellidos:cliente.apellidos,
        telefono:cliente.telefono,
        direccion:cliente.direccion,
        id:cliente.id
      }
    })
  }
  eliminarCliente(cliente:ClienteInterface){
   console.log(cliente);
   this.router.navigate(['delete-cliente/',cliente.id]);
   
    
  }

  aplicarFiltro(filtro:any){
    this.dataSource.filter= filtro.target.value.trim().toLowerCase();
  }
  
}
