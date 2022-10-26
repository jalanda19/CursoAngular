import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Animales } from 'src/app/models/categoria.model';
import { AnimalesService } from 'src/app/services/animales.service';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-listado-animales',
  templateUrl: './listado-animales.component.html',
  styleUrls: ['./listado-animales.component.scss']
})
export class ListadoAnimalesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Tipo', 'Nombre', 'Observacion', 'Ubicacion', 'Rasgos', 'acciones'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private svAnimales: AnimalesService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog) {

  }

  ngOnInit(): void {
    this.cargaDatos();
  }

  cargaDatos() {
    this.svAnimales.getA().subscribe(animal => {
      console.log(animal);
      this.dataSource = new MatTableDataSource(animal);
    });
  }

  eliminar(animal:Animales) {

    const dialogRef = this.matDialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {
        mensaje: `¿Está segur@ que desea eliminar al animalito con el id: ${animal.Nombre}?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Si') {

        this.svAnimales.delete(animal.id).subscribe(response => {
          console.log('Eliminado');
          this.cargaDatos();
          this.snackBar.open('La categoria se ha eliminado correctamente', '', {
            duration: 3000
          });
        });

      }
    });
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

}
