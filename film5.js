let request = "https://swapi.dev/api/films/5"

var filmChars = ['https://swapi.dev/api/people/2/', 'https://swapi.dev/api/people/3/', 'https://swapi.dev/api/people/6/', 
'https://swapi.dev/api/people/7/',  'https://swapi.dev/api/people/10/', 'https://swapi.dev/api/people/11/', 
'https://swapi.dev/api/people/20/', 'https://swapi.dev/api/people/21/', 'https://swapi.dev/api/people/22/',
'https://swapi.dev/api/people/33/', 'https://swapi.dev/api/people/35/', 'https://swapi.dev/api/people/36/', 
'https://swapi.dev/api/people/40/', 'https://swapi.dev/api/people/43/', 'https://swapi.dev/api/people/46/', 
'https://swapi.dev/api/people/51/', 'https://swapi.dev/api/people/52/', 'https://swapi.dev/api/people/53/', 
'https://swapi.dev/api/people/58/', 'https://swapi.dev/api/people/59/', 'https://swapi.dev/api/people/60/',
'https://swapi.dev/api/people/61/', 'https://swapi.dev/api/people/62/', 'https://swapi.dev/api/people/63/',
'https://swapi.dev/api/people/64/', 'https://swapi.dev/api/people/65/', 'https://swapi.dev/api/people/66/',
'https://swapi.dev/api/people/67/', 'https://swapi.dev/api/people/68/', 'https://swapi.dev/api/people/69/',
'https://swapi.dev/api/people/70/', 'https://swapi.dev/api/people/71/', 'https://swapi.dev/api/people/72/',
'https://swapi.dev/api/people/73/', 'https://swapi.dev/api/people/74/', 'https://swapi.dev/api/people/75/',
'https://swapi.dev/api/people/76/', 'https://swapi.dev/api/people/77/', 'https://swapi.dev/api/people/78/', 
'https://swapi.dev/api/people/82/', ];

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


