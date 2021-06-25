const news = [
    {
        "title":"How to Have the Hard Vaccination Conversations",
        "description":"Asking someone if they've had a Covid shot can be tricky. Here's how to navigate the new norms of health disclosure.",
        "author":"",
        "legend":"",
        "image":""
},
    {
        "title":"",
        "description":"",
        "author":"",
        "legend":"",
        "image":"/class2/ny/group3/Imagens/keagan-henman--ndLL94OKYA-unsplash.jpg"
}, 
    {
        "title":"Against Expectations, Southwestern Summers Are Getting Even Drier",
        "description":"The finding by researchers runs counter to a basic tenet of climate change - that warming increases humidity. It's also bad news for fire seasons.",
        "author":"",
        "legend":"",
        "image":""
},
    {
        "title":"",
        "description":"Moray els can hunt on land, and footage highlights how they accomplish this feat with a sneaky second set of jaws.",
        "author":"",
        "legend":"",
        "image":""
},
    {
        "title":"",
        "description":"By studying centenarians, reseachers hope to develop strategies to ward off Alzheimer's disease and slow brain aging.",
        "author":"",
        "legend":"",
        "image":""
}
]

const rendernews = () => {

    const item = news[0]
    const allItems = `
            <a href="#">
                <h3>${news.title}</h3>
            </a>
            <a href="#"><span>${news.description}</span>
            </a>
    `
    document.getElementById("container__newsleft").innerHTML = allItems

}
const scienceandhealth = () => {
  rendernews()
}

export default scienceandhealth