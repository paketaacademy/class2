import { news } from "../mockup/mock-news.js"
import { arts } from "../mockup/mock-arts.js"
import { living } from "../mockup/mock-living.js"
import { opinion } from "../mockup/mock-opinion.js"

const factoryNews = (array, div) => {
    //for (let i = 0; i < array.length; i++) {
    array.map( (a) => {
        div.innerHTML += `
            <div class="topcs-news__element">
                <h3 class="element__title">${a.title}</h3>
                <img src="http://lorempixel.com/214/143/" alt="Each of the news">
                <a class="element__link" href="#"><p class="element__desc">${a.news[0]}</p></a>
                <a class="element__link" href="#"><p class="element__desc">${a.news[1]}</p></a>
                <a class="element__link" href="#"><p class="element__desc">${a.news[2]}</p></a>
            </div>
        `
    })
    //}
}



let newsDiv = document.querySelector('#news')
let opinionDiv = document.querySelector('#opinion')
let artsDiv = document.querySelector('#arts')
let livingDiv = document.querySelector('#living')

factoryNews(news, newsDiv)
factoryNews(opinion, opinionDiv)
factoryNews(arts, artsDiv)
factoryNews(living, livingDiv)
