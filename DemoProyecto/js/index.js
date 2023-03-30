//for(let i=0; i<elefantes.length)
document.getElementById("Formulario").addEventListener("submit", buscar);
document.getElementById("boton").addEventListener("click")

function macho(){
    elefantes.filter((elefante)=>{
        return elefante.sex == "Male";
    })
}

function buscar(evt){
    evt.preventDefault();
    let elefante_a_buscar = document.getElementById("busqueda").value;

    const aux = elefantes.filter((elefante)=>{
        let elefante = elefantes.name.toLowerCase();
        let elefante2 = elefante_a_buscar.toLowerCase();

        return elefante.inclues(elefante2);

        return elefante.toLowerCase().includes.
    }
}

function dibujar(){
    elefantes.forEach((elefante, i) =>{
        console.log(elefante.name);
        document.querySelector("#contenedor").innerHTML+=`div class="col-3">

    })
}