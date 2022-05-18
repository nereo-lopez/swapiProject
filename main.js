const results = document.querySelector("#results");

async function asyncFetch(value){

    const res = await fetch(`https:swapi.co/api/${value}/`);
    const data = await res.json();
    displayResults(data, value);
}

function displayResults(data, value){

    let output = "";
    console.log(data);
    if(value === 'films'){

        data.results.forEach(item => {
            
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.title}</h4>
                    <div class="card-content">
                        <span style="text-decoration:underline">Episode</span>:${item.episode_id}
                        <span style="text-decoration:underline">Director</span>:${item.director}
                        <span style="text-decoration:underline">Producer</span>:${item.producer}
                    </div>
                </div>
            `
        })
    }

    results.innerHTML= output;
}

//Event listener//
document.querySelector("#buttons").addEventListener("click", e =>{
    asyncFetch(e.target.textContent.trim().toLowerCase());
})

