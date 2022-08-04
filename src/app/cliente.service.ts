import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClienteInterface } from './Interfaces/ClienteInterface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

 // baseUrl :string ='https://localhost:5001/api/Clientes/';
    baseUrl:string = 'http://backendclients.somee.com/api/Clientes/';
  constructor(private http: HttpClient) { 


  }
  getClienteById(id:number){

    let auth_token= localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get(this.baseUrl+id , {headers:headers} );
  }
  getClientes(){

    let auth_token= localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get(this.baseUrl , {headers:headers}  );
  }
  crearCliente(cliente:ClienteInterface){

    let auth_token= localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.post(this.baseUrl,cliente  , {headers:headers}  )
  }

  actulizarClientes(id:number,cliente:ClienteInterface){

    let auth_token= localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.put(this.baseUrl+id,cliente , {headers:headers}  )
  }
  deleteCliente(id:number){

    let auth_token= localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.delete(this.baseUrl+id , {headers:headers}  );
  }
}
