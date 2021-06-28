const news1 = [
    {
        "title": "Senate Voting Rights Bill Expected to Run Into Filibuster",
        "description": "Democrats plan to call a test vote to try to advance a sweeping voting rights bill. They are all but certain to fail. Here's the latesd from Washington.",
        "author": "",
        "legend": "",
        "image": ""
    },
    {
        "title": "A large liberal super PAC will pour $20 million into voing rights efoorts ahead of the 2022 election cycle.",
        "description": "",
        "author": "",
        "legend": "",
        "image": ""
    }
]
const news2 = [
    {
        "title": "She Fought to Reopen Schools, BEcoming a Hero and a Villain",
        "description": "The economist Emily Oster offers loads of data-driven advice about children and Codiv-19. Many parents live by her worlds. Others say she's dangerous.",
        "author": "",
        "legend": "",
        "image": ""
    },
    {
        "title": "",
        "description": "",
        "author": "",
        "legend": "Jillian Freyer for The New York Times",
        "image": "Imagens/womanFlowers.jpg"
    }
]
const news3 = [
    {
        "title": "Britney Spears Quietly Pushed for Years to End Her Conservatorship",
        "description": "Records obtained by The Times reveal that the singer has urged changes to the arrangement that controls her life, and her father's role in leading it.",
        "author": "",
        "legend": "",
        "image": ""
    },
    {
        "title": "",
        "description": "",
        "author": "",
        "legend": "The relationship between Britney Spears, right, and her father, Jamie, is expected to be a central topic at a hearing in Los Angeles on Wednesday regarding the singer’s conservatorship. X17",
        "image": "Imagens/britney.jpg"
    }
]
const news4 = [
    {
        "title": "Los Angeles Has a Housing Crisis. Can It Design Its Way Out?",
        "description": "As Angelenos grapple with ways to address affordable housing and homelessness, a new architecture competition looks to low-rise solutions, outr critic writes.",
        "author": "",
        "legend": "",
        "image": ""
    },
    {
        "title": "",
        "description": "",
        "author": "",
        "legend": "Louisa Van Leer and Antonio Castillo won first place in an architecture competition in Los Angeles for their “Green Alley Housing” proposal in the subdivision category. Louisa Van Leer Architecture",
        "image": "Imagens/architecture.jpg"
    }
]
const news5 = [
    {
        "title": "An Engineer Says He's Cracked the Zodiac. Oline Sleuths Are Skeptical",
        "description": "Fayçal Ziraoui said he cracked ciphers attributed to the Zodiac killer and identified him, causing an uproar and potentially ending a 50-yaer-old quest.",
        "author": "",
        "legend": "",
        "image": ""
    },
    {
        "title": "",
        "description": "",
        "author": "",
        "legend": "“I was obsessed with it, 24 hours a day, that’s all I could think about,” said Fayçal Ziraoui, referring to his efforts to crack the Zodiac killer case. James Hill for The New York Times",
        "image": "Imagens/men.jpg"
    }
]
const news6 = [
    {
        "title": "Carl Nassib, the First openly Gay N.F.L. Player, Has Been a Football Everyman",
        "description": "I've been meaning to do this for a while now, the lineman said of coming out. He comes from a football family and was a standout at Penn State.",
        "author": "",
        "legend": "",
        "image": ""
    },
    {
        "title": "",
        "description": "",
        "author": "",
        "legend": "Carl Nassib has played for three N.F.L. teams. Ethan Miller/Getty Images",
        "image": "Imagens/football.jpg"
    }
]

const rendernews = () => {
    const item = news1[0]
    const allItems = `
    
        <a href="HTML/pag2.html" target="_blank">
            <h3 class="c-title__color">Live</h3>
        </a>
        <a href="HTML/pag2.html" target="_blank">
            <h2 class="c-title__new">${item.title}</h2>
        </a>
        <a href="HTML/pag2.html" target="_blank"><span class="c-desc">${item.description}</span></a>
  
    `
    document.getElementById("first-info").innerHTML = allItems
}

const rendernews2 = () => {
    const item = news1[1]
    const allItems2 = `
        <a href="HTML/pag2.html" target="_blank">
            <h2 class="c-title__new">${item.title}</h2>
        </a>

    `
    document.getElementById("first-info2").innerHTML = allItems2
}

const rendernews3 = () => {
    const item = news2[0]
    const allItems3 = `

        
        <a href="HTML/pag2.html" target="_blank">
            <h2 class="c-title__new">${item.title}</h2>
        </a>
        <a href="HTML/pag2.html" target="_blank"><span class="c-desc">${item.description}</span></a>

    `
    document.getElementById("first-info3").innerHTML = allItems3
}

const rendernews4 = () => {
    const item = news2[1]
    const allItems4 = `

        
        <a href="HTML/pag2.html" target="_blank">
            <figure class="c-img">
                <img class="c-woman__flower" src="${item.image}" alt="Woman">
                <figcaption class="c-legend">${item.legend}</figcaption>
            </figure>
        </a>
        

    `
    document.getElementById("first-info4").innerHTML = allItems4
}
const rendernews5 = () => {
    const item = news3[0]
    const allItems5 = `

    <a href="HTML/pag2.html" target="_blank">
        <h2>${item.title}</h2>
    </a>
    <a href="HTML/pag2.html" target="_blank"> <span>${item.description}</span>
    </a>
        

    `
    document.getElementById("first-info5").innerHTML = allItems5
}
const rendernews6 = () => {
    const item = news3[1]
    const allItems6 = `

    <a href="HTML/pag2.html" target="_blank">
            <figure class="c-img">
                <img src="${item.image}" class="c-img__new-britany"
                                    alt="The relationshi btween Britney Spears">
                <figcaption class="c-legend">${item.legend}
            </figcaption>
        </figure>
    </a>

    `
    document.getElementById("first-info6").innerHTML = allItems6
}
const rendernews7 = () => {
    const item = news4[0]
    const allItems7 = `

    <a href="HTML/pag2.html" target="_blank">
        <h2 class="c-title__new">${item.title}</h2>
    </a>
    <a href="HTML/pag2.html" target="_blank"><span>${item.description}</span></a>

    `
    document.getElementById("first-info7").innerHTML = allItems7
}
const rendernews8 = () => {
    const item = news4[1]
    const allItems8 = `

    <a href="HTML/pag2.html" target="_blank">
        <figure class="c-img c-img__right">
            <img class="c-img__new-arc" src="${item.image}" alt="Architecture">
            <figcaption class="c-legend">${item.legend}</figcaption>
        </figure>
    </a>

    `
    document.getElementById("first-info8").innerHTML = allItems8
}
const rendernews9 = () => {
    const item = news5[0]
    const allItems9 = `

    <a href="HTML/pag2.html" target="_blank">
        <h3>The Great Read</h3>
    </a>
    <a href="HTML/pag2.html" target="_blank">
        <h2>${item.title}</h2>
    </a>
    <a href="HTML/pag2.html" target="_blank">
        <p>${item.description}</p>
    </a>
    <a href="HTML/pag2.html" target="_blank">
        <p class="c-new__bordertop"><strong>Lire en français.</strong></p>
    </a>

    `
    document.getElementById("first-info9").innerHTML = allItems9
}
const rendernews10 = () => {
    const item = news5[1]
    const allItems10 = `

    <a href="HTML/pag2.html" target="_blank">
        <figure class="c-img">
            <img src="${item.image}" class="c-img_man" alt="Man">
            <figcaption class="c-legend">${item.legend}</figcaption>
        </figure>
    </a>

    `
    document.getElementById("first-info10").innerHTML = allItems10
}
const rendernews11 = () => {
    const item = news6[0]
    const allItems11 = `

    <article class="c-new">
        <a href="HTML/pag2.html" target="_blank">
            <h2>${item.title}</h2>
        </a>
        <a href="HTML/pag2.html" target="_blank"><span>${item.description}</span></a>
    </article>

    `
    document.getElementById("first-info11").innerHTML = allItems11
}
const rendernews12 = () => {
    const item = news6[1]
    const allItems12 = `
    <article class="c-new">
        <a href="HTML/pag2.html" target="_blank">
            <figure class="c-img c-img__right">
                <img src="${item.image}" class="c-img_football" alt="Football">
                <figcaption class="c-legend">${item.legend}
                </figcaption>
            </figure>
        </a>
    </article>

    `
    document.getElementById("first-info12").innerHTML = allItems12
}


const firstnews = () => {
    rendernews()
    rendernews2()
    rendernews3()
    rendernews4()
    rendernews5()
    rendernews6()
    rendernews7()
    rendernews8()
    rendernews9()
    rendernews10()
    rendernews11()
    rendernews12()
}

export default firstnews






