let request = "https://swapi.dev/api/films/1"
let characters;

fetch(request).then((response) => {

    return response.json();
}).then( (data) => {

    let p = document.getElementById("name");
    console.log(data);
    p.innerHTML = JSON.stringify(data.title);

    let p1 = document.getElementById("episode");
    console.log(data);
    p1.innerHTML = JSON.stringify(data.episode_id);

    let p2 = document.getElementById("director");
    console.log(data);
    p2.innerHTML = JSON.stringify(data.director);

    let p3 = document.getElementById("producer");
    console.log(data);
    p3.innerHTML = JSON.stringify(data.producer);

    for(i=0; i<=18; i++) {

        let container = document.createElement("div");
        container.className = "text";

        let h2Container = document.createElement("h2");
        h2Container.innerText = characters[i].name;

        container.appendChild(h2Container);

        document.getElementById("character").appendChild(container);
    }
})

