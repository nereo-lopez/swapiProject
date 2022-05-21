let request = "https://swapi.dev/api/films/6"

var filmChars = ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/', 'https://swapi.dev/api/people/3/', 
'https://swapi.dev/api/people/4/',  'https://swapi.dev/api/people/5/',  'https://swapi.dev/api/people/6/', 
'https://swapi.dev/api/people/7/',  'https://swapi.dev/api/people/10/', 'https://swapi.dev/api/people/11/',
'https://swapi.dev/api/people/12/', 'https://swapi.dev/api/people/13/', 'https://swapi.dev/api/people/20/', 
'https://swapi.dev/api/people/21/', 'https://swapi.dev/api/people/33/', 'https://swapi.dev/api/people/35/', 
'https://swapi.dev/api/people/46/', 'https://swapi.dev/api/people/51/', 'https://swapi.dev/api/people/52/', 
'https://swapi.dev/api/people/53/', 'https://swapi.dev/api/people/54/', 'https://swapi.dev/api/people/55/',
'https://swapi.dev/api/people/56/', 'https://swapi.dev/api/people/58/', 'https://swapi.dev/api/people/63/',
'https://swapi.dev/api/people/64/', 'https://swapi.dev/api/people/67/', 'https://swapi.dev/api/people/68/', 
'https://swapi.dev/api/people/75/', 'https://swapi.dev/api/people/78/', 'https://swapi.dev/api/people/79/',
'https://swapi.dev/api/people/80/', 'https://swapi.dev/api/people/81/', 'https://swapi.dev/api/people/82/', 
'https://swapi.dev/api/people/83/' ];

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


