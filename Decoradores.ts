function Decorador(cls : Function){
    console.log("Hola soy un decorador en ejecucion");
    cls.prototype.className = cls.name;
}

@Decorador
class Speaker{

}

let speaker : Speaker = new Speaker;

console.log((speaker as any).className);

///Decorador de metodos

<<<<<<< HEAD
function Auditable(message: string){
    return function(clsProto : any, methodName : string, descriptor ?:any){
        let originalFunction = clsProto[methodName];
        let decoratedFunction = function(){
            originalFunction();
            //console.log(`La función ${ methodName } fue ejecutada.`);
            console.log(message);
        }
        descriptor.value = decoratedFunction;
        return descriptor;
    }
}

class Speaker2{
    @Auditable("oldN esta obsoleto hay que usar n")
    oldN(){}

    @Auditable("n fue ejecutado")
    n(){}
=======
function Auditable(clsProto : any, methodName : string, descriptor ?:any){
    let originalFunction = clsProto[methodName];
    let decoratedFunction = function(){
        originalFunction();
        console.log(`La función ${ methodName } fue ejecutada.`);
    }
    descriptor.value = decoratedFunction;
    return descriptor;
>>>>>>> 8732b5bad18cdcc7fefdc04c08d8ab844c98096b
}