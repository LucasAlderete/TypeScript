class Construccion{
    constructor(private _pisos: number){
    }
    impuestos() : number {
        return this._pisos * 3
    }
    get pisos() {
        return this._pisos
    }
    set pisos(pisos: number) {
        this._pisos = pisos
    }
    static edificiosCount(): number { 
        return 1;
    }
}

let Oficina = new Construccion(1);

Oficina.pisos = 10;
alert(Construccion.edificiosCount());

class Residencial extends Construccion {
    constructor(_pisos:number,private _numeroHabitantes: number) { 
        super(_pisos);


    }
    impuestos() : number {
        return this.pisos * 2
    }
    get numeroHabitantes() : number {
        return this._numeroHabitantes;
    }
}

let micasa = new Residencial(1,10);

console.log(micasa.impuestos(), Oficina.impuestos());
console.log("numero de habitantes:" , micasa.numeroHabitantes);
