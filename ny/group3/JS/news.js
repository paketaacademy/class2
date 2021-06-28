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
    },
    {
        "title": "Technology",
        "description": "Antitrust Overhaul Passes Its First Tests. Now, the Hard Parts.",
        "description1": "The Internet Eats Up Less Energy Than You Might Think.",
        "description2": "‘We Are Very Free’: How China Spreads Its Propaganda Version of Life in Xinjiang.",
        "author": "",
        "legend": "",
        "image": "Imagens/juri.jpg"
    },
    {
        "title": "Science",
        "description": "Discovery of ‘Dragon Man’ Skull in China May Add Species to Human Family Tree",
        "description1": "Is This Some Kind of Code? You Can Solve the …",
        "description2": "A Coronavirus Epidemic Hit 20,000 Years Ago, New Study Finds",
        "author": "",
        "legend": "",
        "image": "Imagens/cranio.png"
    },
    {
        "title": "Sports",
        "description": "Despite Slips, Biles Wins at U.S. Trials and Will Lead Olympic Team",
        "description1": "Novak Djokovic Aims to Win at Wimbledon, and His Side Hustle",
        "description2": "Yankees Can’t Keep Taking the Weekends Off",
        "author": "",
        "legend": "",
        "image": "Imagens/ginasta.jpg"
    },
    {
        "title": "Obituaries",
        "description": "The pianist and composer Frederic Rzewski in 2016. Mr. Rzewski’s anti-establishment thinking stood at the center of his music-making and influenced generations of musicians. Frederic Rzewski, Politically Committed Composer and Pianist, Dies at 83",
        "description1": "Mike Gravel, Unconventional Two-Term Alaska Senator, Dies at 91",
        "description2": "Jon Hassell, Trumpeter and ‘Fourth World’ Composer, Dies at 84",
        "author": "",
        "legend": "",
        "image": "Imagens/pianista.jpg"
    },
    {
        "title": "The Upshot",
        "description": "Obamacare’s Survival Is Now Assured, but It Still Has One Big Problem",
        "description1": "Do Chance Meetings at the Office Boost Innovation? There’s No Evidence of It.",
        "description2": "A Bill Destined to Fail May Now Spawn More Plausible Options",
        "author": "",
        "legend": "",
        "image": "Imagens/maps.png"
    },
    {
        "title": "Climate and Environment",
        "description": "Fawn Sharp, former president of the Quinault Nation and president of the National Congress of American Indians.",
        "description1": "Dispossessed, Again: Climate Change Hits Native Americans Especially Hard",
        "description2": "Bipartisan Infrastructure Deal Omits Big Climate Measures Wildfires Threaten Urban Water Supplies, Long After the Flames Are Out.",
        "author": "",
        "legend": "",
        "image": "Imagens/woman-lagoa.jpg"
    },
    {
        "title": "Education",
        "description": "Studies continue to show that many young children have struggled to master fundamental reading and math skills.",
        "description1": "Does It Hurt Children to Measure Pandemic Learning Loss?",
        "description2": "Online Schools Are Here to Stay, Even After the Pandemic Why Students Are Logging In to Class From 7,000 Miles Away",
        "author": "",
        "legend": "",
        "image": "Imagens/escola.jpg"
    },
    {
        "title": "Health",
        "description": "Pfizer and Moderna Vaccines Likely to Produce Lasting Immunity, Study Finds",
        "description1": "Helping Drug Users Survive, Not Abstain: ‘Harm Reduction’ Gains Federal Support",
        "description2": "As Parents Forbid Covid Shots, Defiant Teenagers Seek Ways to Get Them",
        "author": "",
        "legend": "",
        "image": "Imagens/vacina.jpg"
    },
    {
        "title": "Reader Center",
        "description": "A portion of Wilkes-Barre’s Public Square as seen in a panoramic collage.",
        "description1": "A Long Look at One Downtown",
        "description2": "10 Million Data Requests: How Our Covid Team Tracked the Pandemic Behind One Pulitzer, Hundreds of Hands",
        "author": "",
        "legend": "",
        "image": "Imagens/predio.jpg"
    },
    {
        "title": "Guest Essays",
        "description": "Carl Nassib Came Out. Coaches and Teammates Need to Step Up.",
        "description1": "Dear Class of 2021: Don’t Do Your Homework. Live Your Life.",
        "description2": "A Guy Fieri Pep Talk",
        "author": "",
        "legend": "",
        "image": "Imagens/football-tres.jpg"
    },
    {
        "title": "Obituaries",
        "description": "The pianist and composer Frederic Rzewski in 2016. Mr. Rzewski’s anti-establishment thinking stood at the center of his music-making and influenced generations of musicians. Frederic Rzewski, Politically Committed Composer and Pianist, Dies at 83",
        "description1": "Mike Gravel, Unconventional Two-Term Alaska Senator, Dies at 91",
        "description2": "Jon Hassell, Trumpeter and ‘Fourth World’ Composer, Dies at 84",
        "author": "",
        "legend": "",
        "image": "Imagens/pianista.jpg"
    },
    {
        "title": "The Upshot",
        "description": "Obamacare’s Survival Is Now Assured, but It Still Has One Big Problem",
        "description1": "Do Chance Meetings at the Office Boost Innovation? There’s No Evidence of It.",
        "description2": "A Bill Destined to Fail May Now Spawn More Plausible Options",
        "author": "",
        "legend": "",
        "image": "Imagens/maps.png"
    },
    {
        "title": "Climate and Environment",
        "description": "Fawn Sharp, former president of the Quinault Nation and president of the National Congress of American Indians.",
        "description1": "Dispossessed, Again: Climate Change Hits Native Americans Especially Hard",
        "description2": "Bipartisan Infrastructure Deal Omits Big Climate Measures Wildfires Threaten Urban Water Supplies, Long After the Flames Are Out.",
        "author": "",
        "legend": "",
        "image": "Imagens/woman-lagoa.jpg"
    },
    {
        "title": "Education",
        "description": "Studies continue to show that many young children have struggled to master fundamental reading and math skills.",
        "description1": "Does It Hurt Children to Measure Pandemic Learning Loss?",
        "description2": "Online Schools Are Here to Stay, Even After the Pandemic Why Students Are Logging In to Class From 7,000 Miles Away",
        "author": "",
        "legend": "",
        "image": "Imagens/escola.jpg"
    },
    {
        "title": "Health",
        "description": "Pfizer and Moderna Vaccines Likely to Produce Lasting Immunity, Study Finds",
        "description1": "Helping Drug Users Survive, Not Abstain: ‘Harm Reduction’ Gains Federal Support",
        "description2": "As Parents Forbid Covid Shots, Defiant Teenagers Seek Ways to Get Them",
        "author": "",
        "legend": "",
        "image": "Imagens/vacina.jpg"
    },
    {
        "title": "Reader Center",
        "description": "A portion of Wilkes-Barre’s Public Square as seen in a panoramic collage.",
        "description1": "A Long Look at One Downtown",
        "description2": "10 Million Data Requests: How Our Covid Team Tracked the Pandemic Behind One Pulitzer, Hundreds of Hands",
        "author": "",
        "legend": "",
        "image": "Imagens/predio.jpg"
    },
    {
        "title": "Guest Essays",
        "description": "Carl Nassib Came Out. Coaches and Teammates Need to Step Up.",
        "description1": "Dear Class of 2021: Don’t Do Your Homework. Live Your Life.",
        "description2": "A Guy Fieri Pep Talk",
        "author": "",
        "legend": "",
        "image": "Imagens/football-tres.jpg"
    }
]

let cont = 0
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        if (cont == 0) {
            rendesports()
        }else if(cont == 1){
            rendegames(0)
        }else if(cont == 2){
            rendeworlds()        
        } else {
            window.removeEventListener('scroll', rendernews)
        }
        cont++
    }

});



const criarPost = (news) => `
        <div class="container--first">
        <a href="HTML/pag2.html" target="_blank">
                <h5>${news.title}</h5>
            </a>
            <a href="HTML/pag2.html" target="_blank""><img class="new-img" src="${news.image}" alt="Policiais"></a>
            <ul>
                <li>
                <a href="HTML/pag2.html" target="_blank"><span>${news.description}</span></a>
                </li>
                <li>
                <a href="HTML/pag2.html" target="_blank"><span>${news.description1}</span></a>
                </li>
                <li>
                <a href="HTML/pag2.html" target="_blank"><span>${news.description2}</span></a>
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

const rendesports = () => {

   
    const ele5 = news[5]
    const ele6 = news[6]
    const ele7 = news[7]
    const ele8 = news[8]
    const ele9 = news[9]
    const allElements = `
        <div  class="news__container">
            ${criarPost(ele5)}
            ${criarPost(ele6)}
            ${criarPost(ele7)}
            ${criarPost(ele8)}
            ${criarPost(ele9)}
        </div>
    `
    console.log('ola')

    let objTo = document.getElementById('sports');
    let divtest = document.createElement("div");
    divtest.innerHTML = allElements;
    objTo.appendChild(divtest);

}
const rendegames = () => {

   
    const ele10 = news[10]
    const ele11 = news[11]
    const ele12 = news[12]
    const ele13 = news[13]
    const ele14 = news[14]
    const allElements = `
        <div  class="news__container">
            ${criarPost(ele10)}
            ${criarPost(ele11)}
            ${criarPost(ele12)}
            ${criarPost(ele13)}
            ${criarPost(ele14)}
        </div>
    `
    console.log('ola')

    let objTo = document.getElementById('games');
    let divtest = document.createElement("div");
    divtest.innerHTML = allElements;
    objTo.appendChild(divtest);

}
const rendeworlds = () => {

   
    const ele15 = news[15]
    const ele16 = news[16]
    const ele17 = news[17]
    const ele18 = news[18]
    const ele19 = news[19]
    const allElements = `
        <div  class="news__container">
            ${criarPost(ele15)}
            ${criarPost(ele16)}
            ${criarPost(ele17)}
            ${criarPost(ele18)}
            ${criarPost(ele19)}
        </div>
    `
    console.log('ola')

    let objTo = document.getElementById('worlds');
    let divtest = document.createElement("div");
    divtest.innerHTML = allElements;
    objTo.appendChild(divtest);

}

const newSection = () => {
    rendernews()

}

export default newSection
