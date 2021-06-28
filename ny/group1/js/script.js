import { pop } from "../mockup/mock-pop.js"
import { news } from "../mockup/mock-news.js"
import { arts } from "../mockup/mock-arts.js"
import { living } from "../mockup/mock-living.js"
import { opinion } from "../mockup/mock-opinion.js"
import { initFooter } from "../js/footer.js"

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
let cont = 0
let titlePopular = document.querySelector('.title__popular')
let titleNews = document.querySelector('.title__news')
let titleOpinion = document.querySelector('.title__opinion')
let titleArts = document.querySelector('.title__arts')
let titleLiving = document.querySelector('.title__living')

export const scroll = window.addEventListener('scroll', () => {	
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;	
	if(scrollTop + clientHeight >= scrollHeight - 5) {
        if (cont == 0) {
            titlePopular.classList.remove('title__popular')
            factoryPopular(pop, popDiv)
        } else if (cont == 1) {
            titleNews.classList.remove('title__news')
            factoryNews(news, newsDiv)
        } else if (cont == 2) {
            titleOpinion.classList.remove('title__opinion')
            factoryNews(opinion, opinionDiv)
        } else if (cont == 3) {
            titleArts.classList.remove('title__arts')
            factoryNews(arts, artsDiv)
        } else if (cont == 4) {
            titleLiving.classList.remove('title__living')
            factoryNews(living, livingDiv)
        } else if (cont == 5) {
            initFooter()
        } else {
            window.removeEventListener('scroll', factoryPopular)
        }
        cont++
	}
});