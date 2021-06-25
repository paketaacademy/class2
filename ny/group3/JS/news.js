const news = [
    {
        "title":"World News",
        "description":"Protester Who Crashed Into Police Faces Hong Kong's First Security Law Trial.",
        "description1":"'Forbidden Fruit': Apple Daily, Pro-Democracy Newspaper in Hong Kong, is Forced to Close.",
        "description2":"In the West, the Looted Bronzes are museum Pieces. In Nigeria, 'They are our Ancestors.",
        "author":"",
        "legend":"",
        "image":"Imagens/news-police.jpg"
},
    {
        "title":"U.S. News",
        "description":"She fought to reopen Schools, becoming a hero and a Villain.",
        "description1":"California has a plan to pay the back rent for low-income tenants. All of it.",
        "description2":"Many parts of the U.S. needed persuading to Get Vaccinated. Not south Texas.",
        "author":"",
        "legend":"",
        "image":"Imagens/news-womanFlowers.jpg"
},
    {
        "title":"U.S. Politics",
        "description":"White House unveils strategy to combat domestic extremism.",
        "description1":"'Facing mounting pressure, Harris will travel to the southern border friday.",
        "description2":"The White House is expected to extend the federal moratorium on evictions for another month.",
        "author":"",
        "legend":"",
        "image":"Imagens/news-politic.jpg"
},
    {
        "title":"New York",
        "description":"New York primary election results.",
        "description1":"How Adams built diverse coalition that put him ahead in the Mayor's race.",
        "description2":"N.Y.C. mayoral race highlights: Adams leads in early results over Wiley and Garcia.",
        "author":"",
        "legend":"",
        "image":"news-election.png"
},
    {
        "title":"Business",
        "description":"No end to whiplash in meme stocks, crypto and more.",
        "description1":"Your steak in more expensive, but battle ranchers are missing out.",
        "description2":"Turn tech to your advantage in the New Hybrid workplace.",
        "author":"",
        "legend":"",
        "image":"Imagens/news-meme.jpg"
}   
]

window.addEventListener('scroll', () => {
	
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	
	if(scrollTop + clientHeight >= scrollHeight - 5) {
		criarLaco()
        console.log('top'+scrollTop)
        console.log('heigth'+clientHeight)
        console.log('scrolh'+scrollHeight)
	}
});



const criarPost = (pos) => {
    
    
    const item = news[pos]
	const post  = `
        <div class="container--first">
            <a href="#">
                <h5>World News</h5>
            </a>
            <a href="#"><img class="new-img" src="${item.image}" alt="Policiais"></a>
            <ul>
                <li>
                    <a href="#"><span>${item.description}</span></a>
                </li>
                <li>
                    <a href="#"><span>${item.description1}</span></a>
                </li>
                <li>
                    <a href="#"><span>${item.description2}</span></a>
                </li>
            </ul>
        </div>
	`
	document.getElementById("news").innerHTML = post
    
}


const criarLaco = () => {
    for(let cont; cont <= news.length; cont++){
        criarPost(cont)
    }
}



const newSection = () => {
    criarLaco()
    
  }
  
  export default newSection
