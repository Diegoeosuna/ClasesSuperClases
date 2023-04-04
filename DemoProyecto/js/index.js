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

    const aux = elefantes.filter((elefante) => {
        let elefante = elefantes.name.toLowerCase();
        let elefante2 = elefante_a_buscar.toLowerCase();

        return elefante.inclues(elefante2);

        return elefante.toLowerCase()
    });
}

function dibujar(elephants_filter) {
    document.querySelector("#contenedor").innerHTML = "";
    elephants_filter.array.forEach((elephant, i) => {
        document.querySelector("#contenedor"),innerHTML+= `<div class="col-3">
        <div class="card mb-5">
            <img src="${elephant.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${elephant.name}</h5>
                <p class="card-text">${elephant.note}</p>
                <a href="${elephant.wikilink}" target="_blank" class="btn btn-primary">Ver más</a>
            </div>
        </div>
    </div>`
    });
    }

    dibujar(elephants);