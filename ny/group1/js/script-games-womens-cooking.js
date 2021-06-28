import { cooking } from "../mockup/mock-games-womens-cooking.js"
import { womensNews } from "../mockup/mock-games-womens-cooking.js"
import { GAMES_LIST } from "../mockup/mock-games-womens-cooking.js"

const games = document.querySelector(".games")
const newsWomens = document.querySelector('.news-womens')
const boxCooking = document.querySelector('.recepies-cooking')

function factoryWomenCooking(array, div){
    for (let i = 0; i < array.length; i++){
        div.innerHTML += `
            <div class="box-news-womens-cooking">
                <a href="post.html" class="link-womens-cooking"><img src="http://lorempixel.com/195/143/"></a>
                <a href="post.html" class="link-womens-cooking"><h3 class="title-cooking-womens">${array[i].titulo}</h3></a>
            </div>
        `
    }
}

function factoryGame (array){
    for (let i = 0; i < array.length; i++){
        games.innerHTML += `
            <div class="games-js">
                <div class="description">
                    <a href="post.html" class="link-games"> <h3 class="description-h">${array[i].titulo}</h3><a>
                    <a href="post.html" class="link-games"> <p class="description-p">${array[i].description}</p><a>
                </div>
                <div class="img-game">
                    <a href="post.html" class="link-games"><img src="http://lorempixel.com/91/91/"></a>
                </div>
            </div>
        `
    }

}



export function initSmallSec(){
    factoryWomenCooking(cooking, boxCooking)
    factoryWomenCooking(womensNews, newsWomens)
    factoryGame(GAMES_LIST)
}

