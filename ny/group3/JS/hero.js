const news = [
    {
        "title": "New Yorkers Vote in Acrimonious Mayoral Primary",
        "description": "New Yorkers vote today in a mayoral race defined by clashes over public safety, the economy and ethics that turned ugle in the final stretch.",
        "author": "",
        "legend": "",
        "image": ""
    },
    {
        "title": "",
        "description": "It will be the city's first mayoral elections that uses ranked-choice voting, a system that may delay the declaration of a winner for weeks.",
        "author": "",
        "legend": "",
        "image": ""
    },
    {
        "title": "",
        "description": "",
        "author": "",
        "legend": "",
        "image": "/class2/ny/group3/Imagens/marco-oriolesi-wqLGlhjr6Og-unsplash.jpg"
    },
    {
        "title": "How New Yorkers Feel About Ranked-Choice Voting",
        "description": "Voters are using a new system citywide for the first time, but many seemed characteristically unfazed: It's real easy if people just learn how to read.",
        "author": "",
        "legend": "",
        "image": ""
    },
    {
        "title": "Read our New York Today newsletter for a guide to casting your ballot and navigating ranked-choice voting.",
        "description": "Voters are using a new system citywide for the first time, but many seemed characteristically unfazed: It's real easy if people just learn how to read.",
        "author": "",
        "legend": "",
        "image": ""
    }
]

const rendernews = () => {

    const item = news[0]
    const allItems = `
    <a href="HTML/pag2.html" target="_blank""><span>
            <h2>${item.title}</h2>
        </span></a>
    <ul>
    <a href="HTML/pag2.html" target="_blank"">
            <li>${item.description}</li>
        </a>
        <a href="HTML/pag2.html" target="_blank">
            <li>${item.description}</li>
        </a>
    </ul>
    `
    document.getElementById("section-rigth").innerHTML = allItems

}
const init = () => {
    rendernews()
    rendernews2()
}

export default init

const rendernews2 = () => {
    const item = news[3]
    const allItems = `
    <a href="HTML/pag2.html" target="_blank" class="section1__left--separation"><span>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </span></a>
                    <a href="HTML/pag2.html" target="_blank"><span>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </span></a>
    `
    document.getElementById("section-left").innerHTML = allItems
}





