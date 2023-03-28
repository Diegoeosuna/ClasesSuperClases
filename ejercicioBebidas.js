class Bebida {
    constructor(cantidad){
    this.cantidad = cantidad;
    }
}

class Refresco extends Bebida{
    constructor(cantidad, azucar){
    super(cantidad);
    this.azucar = azucar;
    }
}

class Cerveza extends Bebida{
    constructor(cantidad, alcohol){
        super(cantidad);
        this.alcohol = alcohol;
    }
}

const DosEquis = new Cerveza(600 + "ml", 6 + "%");
const Sprite = new Refresco(355 + "ml", 200 + "g");