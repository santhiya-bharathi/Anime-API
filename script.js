

document.body.innerHTML=`<section class = "anime"></section>`;

async function getAllAnime(){
    const data = await fetch(
        "https://api.jikan.moe/v3/search/anime?q=Naruto",
        {method: "GET"}
    );
    // console.log(data);
    const series = await data.json();
    
    const animeContainer = document.querySelector(".anime");

    series.results.forEach((serie)=>{
        animeContainer.innerHTML += `
        <div class = "anime-container">
        <div class = "image">
        <img class = "anime-img"  src = "${serie.image_url}" alt = "${serie.title}" />
        </div>
        <div class = "details">
        <p class = "title">TITLE OF SERIES:  ${serie.title}</p>
        <p class = "date"> START DATE OF THE SERIES:  ${serie.start_date}</p>
        <p class = "date"> END DATE OF THE SERIES:  ${serie.end_date}</p>
        <p class = "type"> TYPE OF SERIES:  ${serie.type}</p>
        <p class = "type"> RATING OF THE SERIES:  ${serie.rated}</p>
        </div>
        </div>
        
        `;
    });
}
getAllAnime();

