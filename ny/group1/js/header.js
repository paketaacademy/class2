import { NAV_BAR } from "../mockup/mock-navBar.js";

const opcoes = {
    dateStyle: 'full'
}

export const header = () => {
    boxDate.innerHTML = data.toLocaleDateString('pt-BR', opcoes)
    boxWeather.innerHTML = data.toLocaleTimeString('pt-BR')
}

function NavBar(array){
    for (let i = 0; i < array.length; i++){
        boxNavBar.innerHTML += `
            <li class="link-nav-bar">
                <a href="post.html" class="link-nav">${array[i]}</a>
            </li>
        `
    }
}

const boxDate = document.querySelector('.box-date')
const boxWeather = document.querySelector(".box-weather")
const data = new Date()

const boxNavBar = document.querySelector(".nav-bar")

export const initNavbar = () => NavBar(NAV_BAR)