const newsWomens = document.querySelector('.news-womens')
const boxCooking = document.querySelector('.recepies-cooking')

const womensNews = [
    {
        titulo: "Why Is Perimenopause Still Such a Mystery?",

    },
    {
        titulo: "Know Your Uterus",

    },
    {
        titulo: "Postpartum Body Changes You Should Know About",

    },
    {
        titulo: "This Is Your Brain on Motherhood",

    },
    {
        titulo: "When Doctors Downplay Women’s Health Concerns",
 
    }
]


const cooking = [
    {
        titulo: "Best Gazpacho",

    },
    {
        titulo: "Dutch Baby With Bacon and Runny Camembert",

    },
    {
        titulo: "Tofu and Green Beans With Chile Crisp",

    },
    {
        titulo: "Fresh Strawberry Bundt Cake",

    },
    {
        titulo: "Jalapeño Grilled Pork Chops",

    }
]

function factoryWomen(array, div){
    elementNews = []
    for (let i = 0; i < array.length; i++){
        elementNews.push(`
            <div class="box-news-womens-cooking">
                <a href="#" class="link-womens-cooking"><img src="http://lorempixel.com/195/143/"></a>
                <a href="#" class="link-womens-cooking"><h3 class="title-cooking-womens">${array[i].titulo}</h3></a>
            </div>
        `
        )
    }
    div.innerHTML = elementNews
}

let elementNews = []
function init(){
    factoryWomen(cooking, boxCooking)
    factoryWomen(womensNews, newsWomens)
}

init()