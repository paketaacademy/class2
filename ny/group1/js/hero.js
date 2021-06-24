import {items} from "../mockup/mock-hero.js"
import {newDest} from "../mockup/mock-hero.js"
import {peoples} from "../mockup/mock-hero.js"

const factoryItems = (items) => {
    items.map((item) => {
        itemsDiv.innerHTML += `
            <div class="hero__item">
                <a class="text__link" href="post.html">
                    <img src="${item.image}" alt="Ad cover">
                </a>
                <div class="hero__text">
                    <a class="text__link" href="post.html">
                        <h3 class="hero__h3">${item.title}</h3>
                        <p class="hero__p">${item.desc}</p>
                    </a>
                </div>
            </div>
        `
    })
    //console.log(items[1])
    //items[1].classList.add("border")
}
const featuredNews = (obj) => {
    let pos = 0
    obj = obj[pos]
    heroMain.innerHTML = `
    <div class="hero__dest">
        <div class="hero__desc">
            <h1 class="hero__h1"><a class="hero__link" href="post.html">${obj.title}</a></h1>
            <ul class="hero__ul">
                <li>${obj.list[0]}</li>
                <li>${obj.list[1]}</li>
            </ul>
        </div>
        <div class="hero__image">
            <h3 class="hero__h2">${obj.subtitle}</h3>
            <a class="hero__link" href="post.html"><img class="hero__imgs" src="${obj.image}" alt="Featured news cover"></a>
            <p><span>${obj.information[0].date}</span> ${obj.information[0].desc}.</p>
            <p><span>${obj.information[1].date}</span> ${obj.information[1].desc}</p>
            <p><span>${obj.information[2].date}</span> ${obj.information[2].desc}</p>
        </div>
        <div class="hero__related">
            <div>
                <h2><a class="hero__link" href="post.html">${obj.related[0].title}</a></h2>
                <p>
                    ${obj.related[0].desc}
                </p>
                <hr>
                <h2><a class="hero__link" href="post.html">${obj.related[1].title}</a></h2>
            </div>
        </div>
    </div>
    `
}

const factoryPeoples = (peoples) => {
    peoples.map((people) => { 
        peopleDiv.innerHTML += `
            <div class="people">
                <div>
                    <a class="people__link" href="post.html">
                        <h3 class="people__title">${people.title}</h3>
                        <p class="people__desc">${people.desc}</p>
                    </a>
                </div>
                <a class="people__link" href="post.html">
                    <img class="people__img" src="${people.image}" alt="Person's picture">
                </a>
            </div>
        `
    })
}

let itemsDiv = document.querySelector('.hero__row')
let heroMain = document.querySelector('.hero__main')
let peopleDiv = document.querySelector('.news-people')

const init = () =>{
    factoryItems(items)
    featuredNews(newDest)
    factoryPeoples(peoples)
}

init()