import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CronometroComponent } from '../cronometro/cronometro.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  @ViewChild('cronometro') cronometro: CronometroComponent = <CronometroComponent>{};

  @Input()
  public Erros: number = 0;
  
  @Input()
  public Acertos: number = 0;

  public PausarCronometro(){
    this.cronometro.stop();
  }

  ngOnInit(): void {}
}