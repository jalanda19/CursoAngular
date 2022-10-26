import { Component, OnInit } from '@angular/core';
import { Especies } from 'src/app/models/categoria.model';
import { AnimalesService } from 'src/app/services/animales.service';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TiposService } from 'src/app/services/tipos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listado-tipos',
  templateUrl: './listado-tipos.component.html',
  styleUrls: ['./listado-tipos.component.scss']
})
export class ListadoTiposComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'tipo', 'acciones'];
  dataSource: any;

  constructor(private svEspecies:TiposService,
              private matDialog: MatDialog,
              private snackBar:MatSnackBar) { 
    
  }

  ngOnInit(): void {
    this.cargaDatos();
  }


  cargaDatos(){    
    this.svEspecies.getE().subscribe(especie => {
      console.log(especie);
      this.dataSource = new MatTableDataSource(especie);
    });
  }

  eliminar(especie:Especies) {

    const dialogRef = this.matDialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {
        mensaje: `¿Está segur@ que desea eliminar al animalito con el id: ${especie.nombre}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Si') {

        this.svEspecies.delete(especie.id).subscribe(response => {
          console.log('Eliminado');
          this.cargaDatos();
          this.snackBar.open('La especie se ha eliminado correctamente', '', {
            duration: 3000
          });
        });

      }
    });
  }
}
