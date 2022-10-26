import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoTiposComponent } from './listado-tipos/listado-tipos.component';
import { AgregarEditarTiposComponent } from './agregar-editar-tipos/agregar-editar-tipos.component';
import { MaterialDesignModule } from '../shared/material-design/material-design.module';
import { TiposRoutingModule } from './tipos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListadoTiposComponent,
    AgregarEditarTiposComponent
  ],
  imports: [
    CommonModule,
    TiposRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TiposModule { }
