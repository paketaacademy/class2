import { NEWS_LIST } from "./mockupForNews.js";

const mock = NEWS_LIST

let principalNews = document.querySelector(".principal-news")
let liveUpdatesImg = document.querySelectorAll(".live-updates__ul--img")
let liveUpdatePrimaries = document.querySelector(".live-update-primaries")
let someOtherNews = document.querySelector(".some-other-news")
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
generateLiveNews()
generateLiveNewsN2()
generateLiveBigCol()
generateLiveSmallCol()
generateOpnionFirstRow()
generateLeftOpnions()
generateRightOpnions()