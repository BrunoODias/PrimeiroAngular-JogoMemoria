import { CartaModel } from '../Models/CartaModel';

export class JogoService {

    constructor() {
        this.ramdomize()
    }

    public Acertos:number = 0;
    public Erros:number = 0;

    private _cartas: CartaModel[] = [];

    private ramdomize() {
        var cartas = [
            {
                Id: 1,
                Nome: 'Illaoi'
            },
            {
                Id: 2,
                Nome: 'Irelia'
            },
            {
                Id: 3,
                Nome: 'Leblanc'
            },
            {
                Id: 4,
                Nome: 'Ahri'
            },
            {
                Id: 5,
                Nome: 'Renekton'
            },
            {
                Id: 6,
                Nome: 'Ornn'
            },
            {
                Id: 7,
                Nome: 'LeeSin'
            },
            {
                Id: 8,
                Nome: 'Mordekaiser'
            }
        ]
        this._cartas = cartas.sort(() => Math.random() - Math.random()).slice();
        this._cartas = this._cartas.concat(cartas.sort(() => Math.random() - Math.random()));
    }

    getCartas(): CartaModel[] {
        return this._cartas;
    }





    private cartaClicada: CartaModel | undefined;

    public MarcarCarta(carta: CartaModel){
        if (this.cartaClicada != null) {
            if ((<CartaModel>this.cartaClicada).Id == carta.Id) {
                this.DesmarcarCarta();
                this.MarcarCartasComoResolvidas();
                this.Acertos+=1;
            }
            else {
                this.Erros+=1;
                this.DesmarcarCarta();
                setTimeout(()=>this.VirarCartas(),500);
            }
        }
        else{
            this.cartaClicada = carta;
        }
        this.validarFimDoGame();
    }

    public DesmarcarCarta() {
        this.cartaClicada = undefined;
    }

    VirarCartas(){
        var _cartas = document.getElementsByClassName('carta');
        for(let i =0;i<_cartas.length;i++){
            var current = _cartas[i];
            if(current.getAttribute('concluido') != 'true' && current.classList.contains('carta-virada') == false){
                eval("current.style.background = '';");
                current.classList.add('carta-virada');
            }
        };
    }

    MarcarCartasComoResolvidas(){
        console.log('Resolveu as cartas');
        var _cartas = document.getElementsByClassName('carta');
        for(let i = 0;i<_cartas.length;i++){
            var current = _cartas[i];
            if(current.classList.contains('carta-virada') == false)
                current.setAttribute('concluido','true');
        };
    }

    validarFimDoGame(){
        if(this.Acertos == 8)
            (<Function>this.cb)(true);
        else if(this.Erros == 10)
            (<Function>this.cb)(false);
    }


    private cb: Function | null = null;
    SetarCb(cb:Function){
        this.cb = cb;
    }
}