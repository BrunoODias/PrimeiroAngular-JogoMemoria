import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaComponent } from './components/carta/carta.component';
import { MesaComponent } from './components/mesa/mesa.component';
import { JogoService } from './Services/JogoService';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { DisplayComponent } from './components/display/display.component';



@NgModule({
  declarations: [
    CartaComponent,
    MesaComponent,
    CronometroComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartaComponent,
    MesaComponent
  ],
  providers: [
    JogoService
  ]
})
export class JogoModule { }
