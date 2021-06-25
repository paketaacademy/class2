import { pop } from "../mockup/mock-pop.js"
import { news } from "../mockup/mock-news.js"
import { arts } from "../mockup/mock-arts.js"
import { living } from "../mockup/mock-living.js"
import { opinion } from "../mockup/mock-opinion.js"

const factoryNews = (array, div) => {
    array.map( (a) => {
        div.innerHTML += `
            <div class="topcs-news__element">
                <a class="element__link" href="post.html">
                    <h3 class="element__title">${a.title}</h3>
                    <img src="http://lorempixel.com/214/143/" alt="Each of the news">
                </a>
                <a class="element__link" href="post.html"><p class="element__desc">${a.news[0]}</p></a>
                <a class="element__link" href="post.html"><p class="element__desc">${a.news[1]}</p></a>
                <a class="element__link" href="post.html"><p class="element__desc">${a.news[2]}</p></a>
            </div>
        `
    })
}

const factoryPopular = (array, div) => {
    array.map( (a) => {
        div.innerHTML += `
            <div class="topcs-news__element">
                <a class="element__link" href="post.html">
                    <img src="http://lorempixel.com/214/143/" alt="Each of the news">
                </a>
                <a class="element__link" href="post.html">
                    <h3 class="element__title--pop">${a.title}</h3>
                    <p class="element__desc--pop">${a.desc}</p>
                </a>
            </div>
        `
    })
}


let popDiv = document.querySelector('#pop')
let newsDiv = document.querySelector('#news')
let opinionDiv = document.querySelector('#opinion')
let artsDiv = document.querySelector('#arts')
let livingDiv = document.querySelector('#living')

factoryPopular(pop, popDiv)
factoryNews(news, newsDiv)
factoryNews(opinion, opinionDiv)
factoryNews(arts, artsDiv)
factoryNews(living, livingDiv)
