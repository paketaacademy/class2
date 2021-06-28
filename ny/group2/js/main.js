import { NEWS_LIST } from "./mockupForNews.js";

const mock = NEWS_LIST

let principalNews = document.querySelector(".principal-news")
let liveUpdatesImg = document.querySelectorAll(".live-updates__ul--img")
let liveUpdatePrimaries = document.querySelector(".live-update-primaries")
let someOtherNews = document.querySelector(".some-other-news")
let opinionfooter = document.querySelector(".opnion-footer")
let artsone = document.querySelector('.arts-one')
let arttwo = document.querySelector('.arts-two')
let livingO = document.querySelector('.living-section-one')
let livingT = document.querySelector('.living-section-two')
let liveNews = document.querySelector(".live-news-first-row-col")
let liveNewsN2 = document.querySelector(".live-news-first-row-col2")
let liveBigCol = document.querySelector(".live-big-col")
let smallCol = document.querySelector(".live-small-col")
let opnionFirstRow = document.querySelector(".opnion-first-row")
let leftSideOpnions = document.querySelector(".left-side-opnions")
let rightSideOpnions = document.querySelector(".right-side-opnions")



const firstPageNew = () => {
    mock.map(li => (
        li.firstPageNews.map(a => (
            principalNews.innerHTML = `
                <h2 class="principal-news__h2">${a.title}</h2>
                <h3 class="principal-news__h3">${a.subtitle}</h3>
                <ul class="principal-news__ul">
                    <li class="principal-news__ul--li">${a.info}</li>
                    <li class="principal-news__ul--li">${a.info2}</li>
                </ul>
            `
        ))
    ))
}

const genereteImages = () => {
    mock.map(m => (
        m.liveUpdatesImages.forEach((x, index) => {
            liveUpdatesImg[index].setAttribute('src', x.imageToUpdate)
            liveUpdatesImg[index].setAttribute('alt', x.alt)
        })
    ))
}

const generateLiveUpdatesPrimaries = () => {
    mock.map(m => (
        m.liveUpdatePrimaries.map(l => (
            liveUpdatePrimaries.innerHTML += `
                <div class="live-update-primaries-container-old-news">
                    <span class="live-update-primaries__span">
                        ${l.time}
                    </span>
                    <p class="live-update-primaries__p">
                        ${l.news}
                    </p>
                </div>
            `
        ))
    ))
}

const generateSomeOtherNews = () => {
    mock.map(m => (
        m.someOtherNews.map(s => (
            someOtherNews.innerHTML += `
                <h2 class="some-other-news__h2">${s.title}</h2>
                <p class="some-other-news__p">${s.news}</p>
                <div class="some-other-news-divider"></div>
            `
        ))
    ))
}

const opinionsfooter = () => { //nome da const
    mock.map(m => (
        m.opinion_02.map(s => ( //mockup
            opinionfooter.innerHTML += //variavel
            `
            <div class="opinions-f-div">
                <h3>${s.title}</h3>
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
                <h3>${s.title}</h3> 
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
                <h3 class="art-title">${s.title}</h3>
                <div>
                    <img class="img3" src="${s.imagem}" alt="">
                </div> 
                <p class="art-two">${s.new}</p>
            </div>`
        ))
    ))
}
const generateLiveNews = () => {
    mock.map(m => (
        m.liveNews.map(l => (
            liveNews.innerHTML += `
                <h3>${l.title}</h3>
                <p>${l.news}</p>
            `
        ))
    ))
}

const generateLiveNewsN2 = () => {
    mock.map(m => (
        m.liveNewsSecond.map(l => (
            liveNewsN2.innerHTML += `
                <h3>${l.title}</h3>
            `
        ))
    ))
}

const generateLiveBigCol = () => {
    mock.map(m => (
        m.liveNewsSectionBigCol.map(l => (
            liveBigCol.innerHTML += `
                <div class="live-big-col-news">
                    <h3>${l.title}</h3>
                    <p>${l.news}</h3>
                </div>
                <div class="live-big-col-image">
                    <img src="${l.image}" alt="${l.alt}" />
                </div>
            `
        ))
    ))
}

const livingOne = () => {
    mock.map(m => (
        m.living.map(s => (
            livingO.innerHTML += `
            <div class="living-one-div">
                <h3 calss="living">${s.title}</h3>
                <div>
                    <img class="img4" src="${s.imagem}" alt="">
                </div>
                <p class="living-p">${s.new}</p>
            </div>`
        ))
    ))
}

const generateLiveSmallCol = () => {
    mock.map(m => (
        m.liveNewSectionSmallCol.map(l => (
            smallCol.innerHTML += `
                <h3>${l.title}</h3>
                <p>${l.news}</p>

            `
        ))
    ))
}

const livingTw = () => {
    mock.map(m => (
        m.livingTwo.map(s => (
            livingT.innerHTML += `
            <div class="living-two-div">
                <h3 class="living-two-title">${s.title}</h3>
                <div>
                    <img class="img5" src="${s.imagem}" alt="">
                </div>
                <p class="living-two-p">${s.new}</p>
            </div>`
        ))
    ))
}


const generateOpnionFirstRow = () => {
    mock.map(m => (
        opnionFirstRow.innerHTML += `
            <div class="opnion-first-row-fc">
                <div class="opnion-author">
                    <h4 class="opnion-author__h4">${m.opnionFirstRow.nome}</h4>
                    <div class="opnion-author-avatar">
                        <img src="${m.opnionFirstRow.avatar}" alt="${m.opnionFirstRow.alt}" />
                    </div>
                </div>
                <div class="the-opnion">
                    <h3 class="the-opnion__h3">${m.opnionFirstRow.title}</h3>
                    <p class="the-opnion__p">${m.opnionFirstRow.news}</p>
                </div>
            </div>
            <div class="opnion-first-row-sc">
                <img src="${m.opnionFirstRow.imagem}" alt="" />
            </div>
        `
    ))
}

const generateLeftOpnions = () => {
    mock.map(m => (
        m.opnionRows.map(o => (
            leftSideOpnions.innerHTML += `
                <div class="opnion-author">
                    <h4 class="opnion-author__h4">${o.nome}</h4>
                    <div class="opnion-author-avatar">
                        <img src="${o.avatar}" alt="${o.alt}" />
                    </div>
                </div>
                <div class="the-opnion">
                    <h3 class="the-opnion__h3">${o.title}</h3>
                    <p class="the-opnion__p">${o.news}</p>
                </div>
                <hr class="hr">
            `
        ))
    ))
}

const generateRightOpnions = () => {
    mock.map(m => (
        m.rightSideOpnions.map(r => (
            rightSideOpnions.innerHTML += `
            <div class="opnion-author">
                <h4 class="opnion-author__h4">${r.nome}</h4>
                <div class="opnion-author-avatar">
                    <img src="${r.avatar}" alt="${r.alt}" />
                </div>
            </div>
            <div class="the-opnion">
                <h3 class="the-opnion__h3">${r.title}</h3>
                <p class="the-opnion__p">${r.news}</p>
            </div>
            <hr class="hr">
            `
        ))
    ))
}

firstPageNew()
genereteImages()
generateLiveUpdatesPrimaries()
generateSomeOtherNews()
opinionsfooter()
art()
twoarts()
livingOne()
livingTw()
generateLiveNews()
generateLiveNewsN2()
generateLiveBigCol()
generateLiveSmallCol()
generateOpnionFirstRow()
generateLeftOpnions()
generateRightOpnions()
