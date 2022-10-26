import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoTiposComponent } from './listado-tipos/listado-tipos.component';
import { AgregarEditarTiposComponent } from './agregar-editar-tipos/agregar-editar-tipos.component';

const routes: Routes = [
  {
    path:'', component:ListadoTiposComponent
  },
   {
    path:':id',component: AgregarEditarTiposComponent
   }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposRoutingModule { }
