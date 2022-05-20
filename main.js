//Pagina principal//

const getFilms = fetch("https://swapi.dev/api/films").then(r=>r.json()
    ).then(data => {

    return data;
});

const getFilmsData = (films) => {

    for(let i=0; i<films.length; i++) {

        films[i].image = 'images/film' + (i+1) + '.jpg';
    }
    return films;
}

window.onload = async () => {

    let data = await getFilms;
    let films = getFilmsData(data.results);
    for(let i=0; i<films.length; i++) {

        //Iteraciones para crear elementos//
        let container = document.createElement("div");
        container.className = "col text-center card";

        //Iteraciones para los titulos//
        let h2Container = document.createElement("h2");
        h2Container.innerText = films[i].title;

        //Iteraciones para las imagenes//
        let imgContainer = document.createElement("img");
        imgContainer.src = films[i].image;
        imgContainer.className = "film-image";

        container.appendChild(imgContainer);
        container.appendChild(h2Container);

        document.getElementById("films").appendChild(container);
    }
};

//Episodio IV//

let request = "https://swapi.dev/api/films/1"

fetch(request).then((response) => {

    return response.json();
}).then( (data) => {

    let p = document.getElementById("name");
    console.log(data);
    p.innerHTML = JSON.stringify(data.title);
})

let episode = "https://swapi.dev/api/films/1"

fetch(episode).then((response) => {

    return response.json();
}).then( (data) => {

    let p = document.getElementById("episode");
    console.log(data);
    p.innerHTML = JSON.stringify(data.episode_id);
})

let director = "https://swapi.dev/api/films/1"

fetch(director).then((response) => {

    return response.json();
}).then( (data) => {

    let p = document.getElementById("director");
    console.log(data);
    p.innerHTML = JSON.stringify(data.director);
})

let producer = "https://swapi.dev/api/films/1"

fetch(producer).then((response) => {

    return response.json();
}).then( (data) => {

    let p = document.getElementById("producer");
    console.log(data);
    p.innerHTML = JSON.stringify(data.producer);
})

let characters = "https://swapi.dev/api/films/1"

fetch(characters).then((response) => {

    return response.json();
}).then( (data) => {

    let p = document.getElementById("characters");
    console.log(data);
    p.innerHTML = JSON.stringify(data.characters);
})
