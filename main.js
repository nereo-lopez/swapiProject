//Pagina principal//

const getFilms = fetch("https://swapi.dev/api/films").then(r=>r.json()
    ).then(data => {

    return data;
});

const getFilmsImages = (films) => {

    for(let i=0; i<films.length; i++) {

        films[i].image = 'images/film' + (i+1) + '.jpg';
    }
    return films;
}

window.onload = async () => {

    let data = await getFilms;
    let films = getFilmsImages(data.results);
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

//Pagina 1//

const getFilm1 = fetch("https://swapi.dev/api/films").then(r=>r.json()
    ).then(data => {

    return data;
});

window.onload = async() => {

    let data = await getFilm1;
    let container2 = document.createElement("div");
    container2.className = "col text-center card";

    let h2Container = document.createElement("h2");
    h2Container.innerText = data.title;

    container2.appendChild(h2Container);

    document.getElementById("data").appendChild(container2);
} 