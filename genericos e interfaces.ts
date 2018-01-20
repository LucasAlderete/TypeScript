interface Asset<T>{
    x,y : number;
    generico : T;
}

function generic<T extends Asset>(obj: T){

}

//generic<number>(20)  da error

class Point implements Asset<string>{
    x : number;
    y : number;
    generico : string;
}

generic<Point>(new Point());


class Elements implements Asset<Point>{
    x : number;
    y : number;
    generico : Point;
}