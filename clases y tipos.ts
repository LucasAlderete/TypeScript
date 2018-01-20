class Construccion {
    pisos : Number;
    constructor(pisos : Number) {
        this.pisos = pisos;
    }
    numeroPisos() {
        return this.pisos;
    }
    setNumeroPisos(pisos: Number) {
        this.pisos = pisos;
    }
}

let oficinasCF = new Construccion(2);
console.log(oficinasCF.numeroPisos());
oficinasCF.setNumeroPisos(10);
console.log(oficinasCF.numeroPisos());

// Tipos
let nombre: String;
let edad: Number;

function Hola(nombre: String) {
    
}
Hola("")

function suma(NumeroUno: number, NumeroDos: number): number { 
    return NumeroUno + NumeroDos;
}

// tipo de dato any puede almacenar cualquier cosa

let resultado: number = suma(1, 2);
let resultadoAny: any = suma(10, 20);


///////////////////

class Construccion{
    constructor(private _pisos: number){
    }

    get pisos() {
        return this._pisos
    }
    set pisos(pisos: number) {
        this._pisos = pisos
    }
}

let Oficina = new Construccion(1);

Oficina.pisos = 10;
alert(Oficina.pisos);


////////////////////

 /// Static : Metodos que se ejecutan directamente en la clase;

 



 