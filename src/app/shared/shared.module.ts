import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeConfirmacionComponent } from './mensaje-confirmacion/mensaje-confirmacion.component';
import { MaterialDesignModule } from './material-design/material-design.module';



@NgModule({
  declarations: [
    MensajeConfirmacionComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[
    MensajeConfirmacionComponent
  ]
})
export class SharedModule { }
