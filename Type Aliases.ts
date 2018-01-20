type funcString = () => string;

function executor(f : funcString){

}

//executor(()=>20) // da error
executor( () => "20");
