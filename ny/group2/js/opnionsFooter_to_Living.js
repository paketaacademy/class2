import { NEWS_LIST } from "./mockupForNews.js";
const mock = NEWS_LIST

let opinionfooter = document.querySelector(".opnion-footer")
let artsone = document.querySelector('.arts-one')
let arttwo = document.querySelector('.arts-two')
let livingO = document.querySelector('.living-section-one')
let livingT = document.querySelector('.living-section-two')

const opinionsfooter = () => { 
    mock.map(m => (
        m.opinion_02.map(s => ( 
            opinionfooter.innerHTML += 
            `
            <div class="opinions-f-div">
                <h3 class="title">${s.title}</h3>
                <div>
                    <img class="img1" src="${s.imagem}" alt="">
                          
                </div>                           
                <div>${s.new}</div>
            </div>`
            
        ))
    ))
}

const art = () => {
    mock.map(m => (
        m.arts.map(s => (
            artsone.innerHTML += `
            <div class="arts-d">
                <h3 class="title">${s.title}</h3> 
                <div>
                    <img class="img2" src="${s.imagem}" alt=""> 
                </div>                       
                <p class="arts">${s.new}</p>
            </div>
            `

        ))
    ))
}
const twoarts = () => {
    mock.map(m => (
        m.artsttwo.map(s => (
            arttwo.innerHTML += `
            <div class="arts-two-d">
                <h3 class="title">${s.title}</h3>
                <div>
                    <img class="img3" src="${s.imagem}" alt="">
                </div> 
                <p class="art-two">${s.new}</p>
            </div>`
        ))
    ))
}

const livingOne = () => {
    mock.map(m => (
        m.living.map(s => (
            livingO.innerHTML += `
            <div class="living-one-div">
                <h3 class="title"">${s.title}</h3>
                <div>
                    <img class="img4" src="${s.imagem}" alt="">
                </div>
                <p class="living-p">${s.new}</p>
            </div>`
        ))
    ))
}

const livingTw = () => {
    mock.map(m => (
        m.livingTwo.map(s => (
            livingT.innerHTML += `
            <div class="living-two-div">
                <h3 class="title">${s.title}</h3>
                <div>
                    <img class="img5" src="${s.imagem}" alt="">
                </div>
                <p class="living-two-p">${s.new}</p>
            </div>`
        ))
    ))
}




export const initFourthSection = () => {
    opinionsfooter()
    art()
    twoarts()
    livingOne()
    livingTw()
}
