class Speaker{
    constructor(){
        
    }
    hi(name:string){
        console.log("Hola" + name);
    }
}

let sp : Speaker = new Speaker();

sp.hi("Lukes");
sp.hi("Max");