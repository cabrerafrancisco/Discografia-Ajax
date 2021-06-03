// definimos las distintas iteracciones 
const btnBuscar = document.getElementById('btnBuscar');
const inputArtista = document.getElementById('inputArtista');
const inputTitulo = document.getElementById('inputTitulo');
const inputLanzamiento = document.getElementById('lanzamiento');
const caja = document.getElementById('tarjetas');

btnBuscar.addEventListener('click' , () => {
    //redefino los datos para una mejor lectura
    let artist = inputArtista.value;
    let title = inputTitulo.value;
    let launch = inputLanzamiento.value;

    caja.innerHTML = ""; // vaciar los datos

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        const response = JSON.parse(xhr.responseText);
        response.forEach((element) => {
            //crear los elementos
            const caja = document.createElement("div");
            const Artista = document.createElement("h3");
            const Titulo = document.createElement("h3");
            const Lanzamiento = document.createElement("h4");
            const tapa = document.createElement("img");
            //agregar el contenido
            Artista.textContent = element.artista;
            Titulo.textContent = element.titulo;
            Lanzamiento.textContent = element.lanzamiento;
            tapa.src = element.tapa;
            //agrego todo a la caja
            caja.appendChild(Artista);
            caja.appendChild(Titulo);
            caja.appendChild(Lanzamiento);
            caja.appendChild(tapa);
            caja.classList.add("tarjeta");
            tarjetas.appendChild(caja);
        });
    });
    



// * AQUI AGREGAMOS LOS DATOS A LA URL QUE CONSULTA EN EL JSON *
    let urlInputs = "";

    if(title){
        urlInputs += "title=" + title;
    }
    if(artist){
        urlInputs += "&artist=" + artist;
    }
    if(launch){
        urlInputs += "&launch=" + launch;
    }

    console.log(urlInputs);

    xhr.open("GET", "/discos?" + urlInputs); // URL que se envia
    xhr.send();


})