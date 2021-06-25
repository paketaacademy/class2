const news = [
    {
        "title": "World News",
        "description": "Protester Who Crashed Into Police Faces Hong Kong's First Security Law Trial.",
        "description1": "'Forbidden Fruit': Apple Daily, Pro-Democracy Newspaper in Hong Kong, is Forced to Close.",
        "description2": "In the West, the Looted Bronzes are museum Pieces. In Nigeria, 'They are our Ancestors.",
        "author": "",
        "legend": "",
        "image": "Imagens/news-police.jpg"
    },
    {
        "title": "U.S. News",
        "description": "She fought to reopen Schools, becoming a hero and a Villain.",
        "description1": "California has a plan to pay the back rent for low-income tenants. All of it.",
        "description2": "Many parts of the U.S. needed persuading to Get Vaccinated. Not south Texas.",
        "author": "",
        "legend": "",
        "image": "Imagens/news-womanFlowers.jpg"
    },
    {
        "title": "U.S. Politics",
        "description": "White House unveils strategy to combat domestic extremism.",
        "description1": "'Facing mounting pressure, Harris will travel to the southern border friday.",
        "description2": "The White House is expected to extend the federal moratorium on evictions for another month.",
        "author": "",
        "legend": "",
        "image": "Imagens/news-politic.jpg"
    },
    {
        "title": "New York",
        "description": "New York primary election results.",
        "description1": "How Adams built diverse coalition that put him ahead in the Mayor's race.",
        "description2": "N.Y.C. mayoral race highlights: Adams leads in early results over Wiley and Garcia.",
        "author": "",
        "legend": "",
        "image": "Imagens/news-election.png"
    },
    {
        "title": "Business",
        "description": "No end to whiplash in meme stocks, crypto and more.",
        "description1": "Your steak in more expensive, but battle ranchers are missing out.",
        "description2": "Turn tech to your advantage in the New Hybrid workplace.",
        "author": "",
        "legend": "",
        "image": "Imagens/news-meme.jpg"
    }
]


window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        rendernews()
            
    }
       
});



const criarPost = (news) => `
        <div class="container--first">
            <a href="#">
                <h5>${news.title}</h5>
            </a>
            <a href="#"><img class="new-img" src="${news.image}" alt="Policiais"></a>
            <ul>
                <li>
                    <a href="#"><span>${news.description}</span></a>
                </li>
                <li>
                    <a href="#"><span>${news.description1}</span></a>
                </li>
                <li>
                    <a href="#"><span>${news.description2}</span></a>
                </li>
            </ul>
        </div>
        
        
	    `
const rendernews = () => {
    const ele0 = news[0]
    const ele1 = news[1]
    const ele2 = news[2]
    const ele3 = news[3]
    const ele4 = news[4]
    const allElements = `
    <div  class="news__container">
                ${criarPost(ele0)}
                ${criarPost(ele1)}
                ${criarPost(ele2)}
                ${criarPost(ele3)}
                ${criarPost(ele4)}
                </div>
              `
    console.log('ola')

    let objTo = document.getElementById('news');
    let divtest = document.createElement("div");
    divtest.innerHTML = allElements;
    objTo.appendChild(divtest);

}

const newSection = () => {
    rendernews()

}

export default newSection
