import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Especies } from 'src/app/models/categoria.model';
import { TiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'app-agregar-editar-tipos',
  templateUrl: './agregar-editar-tipos.component.html',
  styleUrls: ['./agregar-editar-tipos.component.scss']
})
export class AgregarEditarTiposComponent implements OnInit {
  formulario!:FormGroup;
  id!:number;
  
  constructor(private fb:FormBuilder,
              private svTipo:TiposService,
              private router:Router,
              private activedRouter:ActivatedRoute,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      tipo: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      nombre: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(50)]]      
      })
  
      this.id = this.activedRouter.snapshot.params['id'] ? +this.activedRouter.snapshot.params['id'] : 0;
      console.log(this.id);
  
       if (this.id!==0){
        this.getById(this.id)
       }
  
  }

  getById(id:number){
    this.svTipo.getById(id).subscribe(response=>{
      console.log('Guardado')
      this.formulario.patchValue({
        ...response
      })
      //this.router.navigate(['/categorias']);
    })
  }

  agregar(especie:Especies){
    this.svTipo.save(especie).subscribe(response=>{
      console.log('Guardado')
      this.snackBar.open('El registro ha sido guardado correctamente','',{
        duration: 3000
      })
      this.router.navigate(['/especies']);
    })
  }

  guardar(){
    const especie:Especies={
      ...this.formulario.value
    };
    if (this.id===0){
    this.agregar(especie);
    }else{
      this.actualizar(especie);
    }
  }

  actualizar(especie:Especies){
    this.svTipo.update(this.id,especie).subscribe(response=>{
      console.log('Guardado')
      this.snackBar.open('La categoria se ha actualizado correctamente','',{
        duration:3000
      });
      this.router.navigate(['/especies']);
    })
  }


  getControlFormulario = (valor:string)=>this.formulario.get(valor)

  get tipo(){
    return this.formulario.get('tipo');
  }
  get nombre(){
    return this.formulario.get('nombre');
  }

}
