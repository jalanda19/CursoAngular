import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './usuarios/registro/registro.component';

const routes: Routes = [
  {
    path:'registro', component: RegistroComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'animales',
    loadChildren: ()=>
        import('./categorias/categorias.module')
        .then(m=>m.CategoriasModule),
        canActivate:[AuthGuard],
        canLoad:[AuthGuard]   
  },
  {
    path:'especies', loadChildren: ()=> import('./tipos/tipos.module').then(m=>m.TiposModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]   
  },
  {
    path:'',
    redirectTo:'animales',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
