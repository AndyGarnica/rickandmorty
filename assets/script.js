// El fetch + la BASE URL se usa para mandar llamara la API la cual se manda a llamar
// verifica que es llamada de la manera correcta
// se regresa una respuesta con las urls a las cuales se van a poder accesar
// se marca un error en caso de que lo exista y se pueda colocar

// Querys del DOM
const cards = document.getElementById('cards');
const menu = document.querySelector('#human');

// url de la API
const apiUrl = 'https://rickandmortyapi.com/api/character';

menu.addEventListener('submit', function(event){
    event.preventDefault();
    const boton = species.value;
})

fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(respJson) {
        const personajes = respJson.results;
        imprimirPersonajes(personajes, 'all');
    })
    .catch(function(error){
        console.log(error)
    })

function crearPersonaje(personaje){
    cards.innerHTML += `

    <section class="card ${personaje.species}">
        <h3>${personaje.name}</h3>
        <img class="img-personajes" src="${personaje.image}">
        <p>${personaje.species}</p>
        <p>${personaje.gender}</p>
        <p>${personaje.status}</p>
        <p>${personaje.location.name}</p>
    </section>
    `
}

function imprimirPersonajes(personajes, filtro) {
    for(let character of personajes) {
        if(filtro == 'all') {
            crearPersonaje(character);
        } else if(filtro == character.species) {
            crearPersonaje(character);
        } else if(filtro == character.gender) {
            crearPersonaje(character);
        } else if(filtro == character.status) {
            crearPersonaje(character);
        } else if(filtro == character.location.name) {
            crearPersonaje(character);
        }

        console.log(character);
    }
}


// imprimirPersonajes(personajes, 'Alive')

// const aliveButtton = doc.que

// aliveButtton.addEventLister('click', function(){
//     mprimirPersonajes(personajes, 'Alive')
// })