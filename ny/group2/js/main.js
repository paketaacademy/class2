import { NEWS_LIST } from "./mockupForNews.js";

const mock = NEWS_LIST

let principalNews = document.querySelector(".principal-news")
let liveUpdatesImg = document.querySelectorAll(".live-updates__ul--img")
let liveUpdatePrimaries = document.querySelector(".live-update-primaries")
let someOtherNews = document.querySelector(".some-other-news")
let otherNews = document.querySelector(".news-one")
let otherNewsFirst = document.querySelector(".news-two")
let otherNewsSecond = document.querySelector(".news-three")
let popularTimes = document.querySelector(".pop-times")
let playSection = document.querySelector(".play-section-one")
let imageBoxed = document.querySelectorAll(".boxed-updates__ul--img")
let scienceOne = document.querySelector(".first-col")
let scienceTwo = document.querySelector(".second-col")
let scienceThree = document.querySelector(".third-col")
let scienceFour = document.querySelector(".full-row")
let imageScience = document.querySelectorAll(".science-updates__ul--img")


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
                <p class="live-update-primaries__p">
                    <span class="live-update-primaries__span">
                        ${l.time}
                    </span>
                    ${l.news}
                </p>
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

const news = () => {
    mock.map(m => (
        m.news.map(a => (
            otherNews.innerHTML += `
            <div class="news-div">
                <h2 class="other-news-h2">${a.title}</h2>
                <p class="other-news-p">${a.new}</p>
            </div>
        `
        ))
    ))
}

const newsFirst = () => {
    mock.map(m => (
        m.newsFirst.map(a => (
            otherNewsFirst.innerHTML += `
            <div class="news-div">
                <h2 class="other-news-h2">${a.title}</h2>
                <p class="other-news-p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const newsSecond = () => {
    mock.map(m => (
        m.newsSecond.map(a => (
            otherNewsSecond.innerHTML += `
            <div class="news-div">
                <h2 class="other-news-h2">${a.title}</h2>
                <p class="other-news-p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const popularInTheTime = () => {
    mock.map(m => (
        m.popularInTheTime.map(a => (
            popularTimes.innerHTML += `
            <div class="news-div">
                <h2 class="other-news-h2">${a.title}</h2>
                <p class="other-news-p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const play = () => {
    mock.map(m => (
        m.play.map(a => (
            playSection.innerHTML += `
            <div class="news-div">
                <h2 class="other-news-h2">${a.title}</h2>
                <p class="other-news-p">${a.new}</p>
            <div>
            <div>
                ${a.imagem}
            </div>
        `
        ))
    ))
}

const scienceFirst = () => {
    mock.map(m => (
        m.scienceAndHealthOne.map(a => (
            scienceOne.innerHTML += `
            <div class="science">
                <h2 class="other-news-h2">${a.title}</h2>
                <p class="other-news-p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const scienceSecond = () => {
    mock.map(m => (
        m.scienceAndHealthTwo.map(a => (
            scienceTwo.innerHTML += `
            <div class="science">
                <h2 class="other-news-h2">${a.title}</h2>
                <p class="other-news-p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const scienceThird = () => {
    mock.map(m => (
        m.scienceAndHealthThree.map(a => (
            scienceThree.innerHTML += `
            <div class="science">
                <h2 class="other-news-h2">${a.title}</h2>
                <p class="other-news-p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const scienceFourth = () => {
    mock.map(m => (
        m.scienceAndHealthFour.map(a => (
            scienceFour.innerHTML += `
            <div class="science">
                <h2 class="other-news-h2">${a.title}</h2>
                <p class="other-news-p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const genereteImageScience = () => {
    mock.map(m => (
        m.scienceImage.forEach((x, index) => {
            imageScience[index].setAttribute('src', x.imageToUpdate)
            imageScience[index].setAttribute('alt', x.alt)
        })
    ))
}

const genereteImageBoxed = () => {
    mock.map(m => (
        m.boxedImage.forEach((x, index) => {
            imageBoxed[index].setAttribute('src', x.imageToUpdate)
            imageBoxed[index].setAttribute('alt', x.alt)
        })
    ))
}


firstPageNew()
genereteImages()
generateLiveUpdatesPrimaries()
generateSomeOtherNews()
news()
newsFirst()
newsSecond()
popularInTheTime()
play()
scienceFirst()
scienceSecond()
scienceThird()
scienceFourth()
genereteImageScience()
genereteImageBoxed()
