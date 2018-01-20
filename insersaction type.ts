class User {
    name : string;
}
class Admin{
    id : number;
    getId() : number{
        return this.id;
    }
}

let persona : User & Admin;

persona.name = "Lukes";
persona.id = 8;

console.log(persona.getId());
<<<<<<< HEAD

/// Type Assertions
persona = new User as User&Admin;


=======
>>>>>>> 8b0473a9d8774d545b88b8b02c8a4d27f55e1cbd
