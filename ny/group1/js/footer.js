import { newsItems } from "../mockup/mock-footer.js"
import { opinionItems } from "../mockup/mock-footer.js"
import { artsItems } from "../mockup/mock-footer.js"
import { livingItems } from "../mockup/mock-footer.js"
import { moreItems } from "../mockup/mock-footer.js"

const factoryFooter = (items, div) => {
    for(let i = 0; i < items.length; i++){
        div.innerHTML +=`
            <a href="#">
                <p>${items[i]}</p>
            </a>
        `
    }
}

let news = document.querySelector('#footer-news')
let opinion = document.querySelector('#footer-opinion')
let arts = document.querySelector('#footer-arts')
let living = document.querySelector('#footer-living')
let more = document.querySelector('#footer-more')

const init = () => {
    factoryFooter(newsItems, news)    
    factoryFooter(opinionItems, opinion)
    factoryFooter(artsItems, arts)
    factoryFooter(livingItems, living)
    factoryFooter(moreItems, more)
}

init()