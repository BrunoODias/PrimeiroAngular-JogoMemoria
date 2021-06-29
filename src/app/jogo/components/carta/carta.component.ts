import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { CartaModel } from '../../Models/CartaModel';
import { JogoService } from '../../Services/JogoService';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent{

  JogoService: JogoService;

  constructor(_service: JogoService) 
  {
    this.JogoService = _service;
  }

  @Input()
  public carta : CartaModel | undefined;
  

  @Input()
  public fim : boolean = false;

  // @Output() public onChangeValues = new EventEmitter();

  virarCarta(evento: MouseEvent){
    if(this.fim)
      return;

    var elemento: HTMLElement = (<HTMLElement>evento.target);
    if(elemento.getAttribute('concluido') == 'true' ||
     elemento.classList.contains('carta-virada') == false ||
     document.querySelectorAll('.carta:not(.carta-virada):not([concluido="true"])').length >= 2)
      return;
      
    var carta = <CartaModel>this.carta;
    elemento.classList.remove('carta-virada');
    elemento.style.background = `url(/assets/Imagens/${carta.Nome}.png)`;
    this.JogoService.MarcarCarta(carta);
  }
}