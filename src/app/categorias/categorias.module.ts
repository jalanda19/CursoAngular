import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListadoAnimalesComponent } from './listado-animales/listado-animales.component';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { AgregarEditarAnimalesComponent } from './agregar-editar-animales/agregar-editar-animales.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ListadoAnimalesComponent,  
    AgregarEditarAnimalesComponent 
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CategoriasModule { }
