import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from './services/categoria.service';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './services/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CategoriaService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
