function sumar (a,b){
    sumar = a+b;
}

class Animal{
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }

    Saludo() {
        return "Hola, soy un animal cualquiera"
    }
}

class Perro extends Animal{
    constructor(nombre, color, raza){
        super(nombre, color)
        this.raza = raza;
    }
    Saludo(){
        return "Hola, soy " + this.nombre + ", ¿dónde esta Charlie?"
    }
}

const Snoopy = new Perro("Snoopy", "Blanco y negro", "Beagle")
const Kiara = new Perro("Kiara", "Café, Blanco y Negro", "Beagle")
console.log(Snoopy.nombre)
console.log(Snoopy.Saludo())

//console.log(Kiara.nombre)
//console.log(Kiara.Saludo)

sumar(1,9);
console.log(sumar)