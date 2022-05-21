let request = "https://swapi.dev/api/films/3"

var filmChars = ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/', 'https://swapi.dev/api/people/3/',
'https://swapi.dev/api/people/4/', 'https://swapi.dev/api/people/5/', 'https://swapi.dev/api/people/10/', 'https://swapi.dev/api/people/13/',
'https://swapi.dev/api/people/14/', 'https://swapi.dev/api/people/18/', 'https://swapi.dev/api/people/20/', 'https://swapi.dev/api/people/21/',
'https://swapi.dev/api/people/22/', 'https://swapi.dev/api/people/23/', 'https://swapi.dev/api/people/24/', 'https://swapi.dev/api/people/25/',
'https://swapi.dev/api/people/26/'];

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


