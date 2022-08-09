import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactComponent } from './contact/contact.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { DeleteClienteComponent } from './delete-cliente/delete-cliente.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'crear-cliente',component:CrearClienteComponent},
  {path:'delete-cliente/:id',component:DeleteClienteComponent},
  {path:'register',component:RegisterComponentComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'acerca',component:AcercaDeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
