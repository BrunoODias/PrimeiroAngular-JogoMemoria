import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { JogoService } from '../../Services/JogoService';
import { CartaModel } from '../../Models/CartaModel';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent {

  JogoService: JogoService;

  constructor(_service: JogoService) 
  {
    this.JogoService = _service;
    this.JogoService.SetarCb(this.fimDoGame);
  }
  
  getCartas(): CartaModel[]{
    return this.JogoService.getCartas();
  }

  
  @ViewChild('display') display: DisplayComponent = <DisplayComponent>{};

  public fim = false;
  public vitoria = false;

  fimDoGame = (vitoria:boolean)=>{
    setTimeout(()=>{this.display.PausarCronometro();
      this.fim = true;
      this.vitoria = vitoria;
    },500);
  }
}