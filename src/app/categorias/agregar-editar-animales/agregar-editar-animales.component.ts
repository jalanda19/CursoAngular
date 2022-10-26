import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Animales } from 'src/app/models/categoria.model';
import { AnimalesService } from 'src/app/services/animales.service';

@Component({
  selector: 'app-agregar-editar-animales',
  templateUrl: './agregar-editar-animales.component.html',
  styleUrls: ['./agregar-editar-animales.component.scss']
})
export class AgregarEditarAnimalesComponent implements OnInit {
  formulario!:FormGroup;
  id!:number;
  constructor(private fb:FormBuilder,
    private svAnimales:AnimalesService,
    private router:Router,
    private activedRouter:ActivatedRoute,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
    Tipo: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
    Nombre: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
    Observacion: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(80)]],
    Ubicacion: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
    Rasgos: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(100)]]
    })

    this.id = this.activedRouter.snapshot.params['id'] ? +this.activedRouter.snapshot.params['id'] : 0;
    console.log(this.id);

     if (this.id!==0){
      this.getById(this.id)
     }

  }

  getById(id:number){
    this.svAnimales.getById(id).subscribe(response=>{
      console.log('Guardado')
      this.formulario.patchValue({
        ...response
      })
      //this.router.navigate(['/categorias']);
    })
  }

  agregar(animal:Animales){
    this.svAnimales.save(animal).subscribe(response=>{
      console.log('Guardado')
      this.snackBar.open('El registro ha sido guardado correctamente','',{
        duration: 3000
      })
      this.router.navigate(['/animales']);
    })
  }

  guardar(){
    const animal:Animales={
      ...this.formulario.value
    };
    if (this.id===0){
    this.agregar(animal);
    }else{
      this.actualizar(animal);
    }
  }

  actualizar(animal:Animales){
    this.svAnimales.update(this.id,animal).subscribe(response=>{
      console.log('Guardado')
      this.snackBar.open('La categoria se ha actualizado correctamente','',{
        duration:3000
      });
      this.router.navigate(['/categorias']);
    })
  }

   getControlFormulario = (valor:string)=>this.formulario.get(valor)

  get Tipo(){
    return this.formulario.get('Tipo');
  }
  get Nombre(){
    return this.formulario.get('Nombre');
  }
  get Observacion(){
    return this.formulario.get('Observacion');
  }
  get Ubicacion(){
    return this.formulario.get('Ubicacion');
  }
  get Rasgos(){
    return this.formulario.get('Rasgos');
  }
}
