class Trabajador{
    constructor(name, usuario, responsabilidades, sueldo){
        this.name = name;
        this._usuario = usuario;
        this.responsabilidades = responsabilidades;
        this._sueldo = sueldo;
    }

    get getSueldo(){
        return this._sueldo;
    }

    set validarUsuario(nuevoUsuario){
        if (nuevoUsuario === "usuarioGasho" || nuevoUsuario === "LaCucaracha"){
            console.warn("No te pases, ya estas peludo!!!")
        } else {
            this._usuario = nuevoUsuario;
            return nuevoUsuario;
        }
    }
}

const rafa = new Trabajador("Rafael", "Rafita",["Ensambles","Sub-Ensambles","Lanzamientos"], "Chorrocientos mil yuanes");

console.log(rafa.name);
console.log(rafa.responsabilidades);
console.log(rafa.getSueldo);
console.log(rafa.validarUsuario = "usuarioGasho");