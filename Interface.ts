interface IHabitante {
    edad: number,
     nombre : string
}

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
    agregarHabitante(habitante : IHabitante) {
        console.log(habitante);
    }
}

let micasa = new Residencial(1,10);

micasa.agregarHabitante({ edad: 1, nombre: "Lucas Alderete" })


class Hombre implements IHabitante {
    
    constructor(public edad: number, public nombre: string) {
        
    }
}

class Mujer implements IHabitante {
    
    constructor(public edad: number, public nombre: string) {
        
    }
}