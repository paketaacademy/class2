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
let leftSideOpnionsDiv = document.querySelector(".left-side-opnions")
let rightSideOpnionsDiv = document.querySelector(".right-side-opnions")
let thirdSectionNewsDiv = document.querySelector(".third-section-news")
let editorOpnionsDiv = document.querySelector(".editors-picks-container")
let moreNewsContainerFlex = document.querySelector(".more-news-container-flex")



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
            leftSideOpnionsDiv.innerHTML += `
            <div class="opnions-container">
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
            </div>
            `
        ))
    ))
}

const generateRightOpnions = () => {
    mock.map(m => (
        m.rightSideOpnions.map(r => (
            rightSideOpnionsDiv.innerHTML += `
            <div class="opnions-container right-side">
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
            </div>
            `
        ))
    ))
}

const generateEditorsOpnion = () => {
    mock.map(m => (
        editorOpnionsDiv.innerHTML = `
                <div class="editors-picks-first-row">
                    <div class="editors-picks-image-container">
                        <img src="${m.editors[0].imagem}" />
                    </div>
                    <h2 class="editors-picks-first-row__h2">${m.editors[0].title}</h2>
                    <p class="editors-picks-first-row__p">${m.editors[0].new}</p>
                </div>

                <div class="editors-one">
                    <div class="editors-one-image-container">
                        <img src="${m.editors[1].imagem}" />
                        <h3 class="editors-one__h3">${m.editors[1].new}</h3>
                    </div>
                    <div class="editors-one-image-container">
                        <img src="${m.editors[2].imagem}" />
                        <h3 class="editors-one__h3">${m.editors[2].new}</h3>
                    </div>
                </div>
            `
    ))
}

const generateThirdSectionNews = () => {
    mock.map(m => (
        m.thirdSectionNews.map(t => (
            thirdSectionNewsDiv.innerHTML += `
            <div class="third-section-news-container">
                <div class="third-section-news-title-subtitle">
                    <h3 class="third-section-news-container__h3">${t.title}</h3>
                    <h4  class="third-section-news-container__h4">${t.subtitle}</h4>
                </div>
                <div  class="third-section-news-container-image">
                    <img src="${t.image}" alt="${t.alt}"  class="third-section-news-container__img"/>
                </div>
                <div class="third-section-news-container-news">
                    <p class="third-section-news-container__p">${t.news}</p>
                </div>
            </div>

            `
        ))
    ))
}

const generateMoreNews = () => {
    mock.map(m => (
        moreNewsContainerFlex.innerHTML = `
        <div class="more-news-container-left-side">
            <div class="first-row-content">
                <div class="more-news-container-colum">
                    <h2 class="more-news__h2 first">${m.moreNews[0].title}</h2>
                    <p class="more-news__p">${m.moreNews[0].news}</p>
                </div>
                <div class="more-news-container-colum bord">
                    <div class="more-news-image">
                        <img src="${m.moreNews[0].image}" alt="${m.moreNews[0].alt}">
                    </div>
                </div>
                <div class="more-news-container-colum pad">
                    <h2 class="more-news__h2">${m.moreNews[1].title}</h2>
                    <p class="more-news__p">${m.moreNews[1].news}</p>
                </div>
            </div>
            <div class="second-row-content">
                <div class="more-news-container-colum bord-right">
                    <h2 class="more-news__h2">${m.moreNews[2].title}</h2>
                    <p class="more-news__p">${m.moreNews[2].news}</p>
                </div>
                <div class="more-news-container-colum pad-left">
                    <h2 class="more-news__h2">${m.moreNews[3].title}</h2>
                    <p class="more-news__p">${m.moreNews[3].news}</p>
                </div>
            </div>
        </div>
        <div class="more-news-container-right-side">
            <div class="more-news-container-colum pad bordbottom">
                <h3 class="more-news__h3">${m.moreNews[4].subtitle}</h3>
            </div>
            <div class="more-news-container-colum pad bordbottom">
                <h3 class="more-news__h3">${m.moreNews[5].subtitle}</h3>
            </div>
            <div class="more-news-container-colum pad bordbottom">
                <h3 class="more-news__h3">${m.moreNews[6].subtitle}</h3>
            </div>
            <div class="more-news-container-colum pad bordbottom">
                <h3 class="more-news__h3">${m.moreNews[7].subtitle}</h3>
            </div>
            <div class="more-news-container-colum pad bordbottom">
                <h3 class="more-news__h3">${m.moreNews[8].subtitle}</h3>
            </div>
        </div>
        `
    ))
}

export const init = () => {
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
    generateEditorsOpnion()
    generateThirdSectionNews()
    generateMoreNews()
}