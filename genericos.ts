function genericReceptor<T>(obj: T): T{
    return obj;
};


genericReceptor<string>("envio una cadena");

let numero = genericReceptor<number>(20)
//numero = "Hola" da error por el tipo dif

function printAll<T>(arr : T[]){
    console.log(arr.length)
}


printAll<string>(["uno","dos","tres"]);
printAll<number>([1,2,3]);
printAll<boolean>([true,true]);

class Printer<T>{
    printAll2(arr: T[]){
        console.log(arr.length);
    }
}

let printer: Printer<string> = new Printer();

//printer.printAll2([1,2,3])
printer.printAll2(["1","2","3"])