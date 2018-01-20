enum Tamaño {
    Chico = 1,
    Mediano = 2,
    Grande = 3
};

enum Estado{
    Bueno = 10,
    Regular,
    Malo
}

class Pedido{
    tamaño : number;
}

let pedido : Pedido = new Pedido();

pedido.tamaño = Tamaño.Grande;
console.log(pedido.tamaño);
pedido.tamaño = Estado.Malo;
console.log(pedido.tamaño);
