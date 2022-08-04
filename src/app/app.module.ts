import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClienteService } from './cliente.service';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'; 
import { MatDialogModule } from '@angular/material/dialog';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { DeleteClienteComponent } from './delete-cliente/delete-cliente.component'
import { AuthService} from './auth.service';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule} from '@angular/material/icon';


import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FooterComponent,
    HeaderComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    DeleteClienteComponent,
    RegisterComponentComponent,
    LoginComponent,
    
    AcercaDeComponent,
         ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MatButtonModule,
    MatTableModule, ReactiveFormsModule,MatInputModule,MatCardModule,MatToolbarModule,
    MatListModule, MatDialogModule,FormsModule,MatPaginatorModule,MatIconModule ],
    
  entryComponents:[ActualizarClienteComponent],
  providers: [ClienteService,AuthService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
