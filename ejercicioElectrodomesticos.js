class Electrodomestico{
    constructor(precio, color, capacidad){
        this.consumoEnergetico = 100;
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;

    }
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }
    consumoFinal(){
        return this.consumoEnergetico * this.carga;
    }
}



var Samsung = new Lavadora(1500, "Blanca", "2000", "30");
//var LG = new Lavadora("$"+1000, "Mostaza", consumoEnergetico, 55);

