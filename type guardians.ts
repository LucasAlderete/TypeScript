function isNumber(obj : number | string) : obj is number{
    return typeof  obj === 'number';
}
function isString(obj : number | string) : obj is string{
    return typeof  obj === 'string';
}

function printAge(age : number | string){
    if(isNumber(age)){

    }
    if(isString(age)){
        
    }
}