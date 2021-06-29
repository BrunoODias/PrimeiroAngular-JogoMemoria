import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  constructor() {
    this.reset();
    this.start();
  }

  private ticks: number = 0;
  public value: string = '00:00';
  private interval:any;

  public start() {
    this.interval = setInterval(()=>this.incrementaTick(),1000);
  }

  public reset() {
    this.ticks = 0;
  }

  public stop() {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
  }

  private incrementaTick(){
    this.ticks+=1;
    this.value = this.FormatText();
  }

  private FormatText():string{
    var minutos:string = String(Math.floor(this.ticks / 60));
    var segundos:string = String((this.ticks % 60));
    
    if(minutos.length == 1)
      minutos = `0${minutos}`;

    if(segundos.length == 1)
      segundos = `0${segundos}`;

        
    return `${minutos}:${segundos}`;
  }
}
