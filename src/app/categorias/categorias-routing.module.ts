import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAnimalesComponent } from './listado-animales/listado-animales.component';
import { AgregarEditarAnimalesComponent } from './agregar-editar-animales/agregar-editar-animales.component';


const routes: Routes = [
  {
    path:'', component:ListadoAnimalesComponent
  },
   {
    path:':id',component: AgregarEditarAnimalesComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
