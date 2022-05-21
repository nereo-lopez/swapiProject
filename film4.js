let request = "https://swapi.dev/api/films/4"

var filmChars = ['https://swapi.dev/api/people/2/', 'https://swapi.dev/api/people/3/', 'https://swapi.dev/api/people/10/',
'https://swapi.dev/api/people/11/', 'https://swapi.dev/api/people/16/', 'https://swapi.dev/api/people/20/', 'https://swapi.dev/api/people/21/',
'https://swapi.dev/api/people/32/', 'https://swapi.dev/api/people/33/', 'https://swapi.dev/api/people/34/', 'https://swapi.dev/api/people/35/',
'https://swapi.dev/api/people/36/', 'https://swapi.dev/api/people/37/', 'https://swapi.dev/api/people/38/', 'https://swapi.dev/api/people/39/',
'https://swapi.dev/api/people/40/', 'https://swapi.dev/api/people/41/', 'https://swapi.dev/api/people/42/', 'https://swapi.dev/api/people/43/',
'https://swapi.dev/api/people/44/', 'https://swapi.dev/api/people/46/', 'https://swapi.dev/api/people/47/', 'https://swapi.dev/api/people/48/',
'https://swapi.dev/api/people/49/', 'https://swapi.dev/api/people/50/','https://swapi.dev/api/people/51/', 'https://swapi.dev/api/people/52/',
'https://swapi.dev/api/people/53/', 'https://swapi.dev/api/people/54/', 'https://swapi.dev/api/people/55/', 'https://swapi.dev/api/people/56/',
'https://swapi.dev/api/people/57/', 'https://swapi.dev/api/people/58/', 'https://swapi.dev/api/people/59/'];

fetch(request).then((response) => {

    return response.json();
}).then( (data) => {

    let p = document.getElementById("name");
    p.innerHTML = JSON.stringify(data.title);

    let p1 = document.getElementById("episode");
    p1.innerHTML = JSON.stringify(data.episode_id);

    let p2 = document.getElementById("director");
    p2.innerHTML = JSON.stringify(data.director);

    let p3 = document.getElementById("producer");
    p3.innerHTML = JSON.stringify(data.producer);
   
    callCharacters();
})

async function callCharacters () {

    for(let i=0; i<filmChars.length; i++){

        fetch(filmChars[i]).then((response) => {
            
            return response.json();
        }).then( (data) => {

        console.log(data);

        let container = document.createElement("div");
        container.className = "text";

        let h2Container = document.createElement("text");
        h2Container.innerText = JSON.stringify(data.name);

        container.appendChild(h2Container);

        document.getElementById("characters").appendChild(container);

        return data;
        });
    }
}


