import { NEWS_LIST } from "./mockupForNews.js";

const mock = NEWS_LIST

let date = document.getElementById("date")
let scienceOne = document.querySelector(".first-col")
let scienceTwo = document.querySelector(".second-col")
let scienceThree = document.querySelector(".third-col")
let scienceFour = document.querySelector(".full-row")
let imageScience = document.querySelectorAll(".science-updates__ul--img")
let playSection = document.querySelector(".play-section-one")
let popularTimes = document.querySelector(".pop-times")
let otherNews = document.querySelector(".news-one")
let otherNewsFirst = document.querySelector(".news-two")
let otherNewsSecond = document.querySelector(".news-three")

function now (){
    let today = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    date.innerHTML = `${weeks[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`
}

const genereteScienceFirst = () => {
    mock.map(m => (
        m.scienceAndHealthOne.map(a => (
            scienceOne.innerHTML += `
            <div class="science">
                <h2 class="other-news__h2">${a.title}</h2>
                <p class="other-news__p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const genereteScienceSecond = () => {
    mock.map(m => (
        m.scienceAndHealthTwo.map(a => (
            scienceTwo.innerHTML += `
            <div class="science">
                <h2 class="other-news__h2">${a.title}</h2>
                <p class="other-news__p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const genereteScienceThird = () => {
    mock.map(m => (
        m.scienceAndHealthThree.map(a => (
            scienceThree.innerHTML += `
            <div class="science">
                <h2 class="other-news__h2">${a.title}</h2>
                <p class="other-news__p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const genereteScienceFourth = () => {
    mock.map(m => (
        m.scienceAndHealthFour.map(a => (
            scienceFour.innerHTML += `
            <div class="science">
                <h2 class="other-news__h2">${a.title}</h2>
                <p class="other-news__p">${a.new}</p>
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

const generetePlay = () => {
    mock.map(m => (
        m.play.map(a => (
            playSection.innerHTML += `
                <div>
                    <h2 class="other-news__h2">${a.title}</h2>
                    <p class="play__p">${a.new}</p>
                </div>
                <div>
                    <img class="img-play" src="${a.imagem}" alt="random image">
                </div>
            `
        ))
    ))
}

const generetePopularInTheTime = () => {
    mock.map(m => (
        m.popularInTheTime.map(a => (
            popularTimes.innerHTML += `
            <div class="news-div">
                <img class="all-images" src="${a.imagem}" alt="random image">
                <h2 class="other-news__h2">${a.title}</h2>
                <p class="other-news__p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const genereteNews = () => {
    mock.map(m => (
        m.news.map(a => (
            otherNews.innerHTML += `
            <div class="news-div">
                <h2 class="other-news__h2">${a.title}</h2>
                <img class="all-images" src="${a.imagem}" alt="random image">
                <p class="other-news__p">${a.new}</p>
            </div>
        `
        ))
    ))
}

const genereteNewsFirst = () => {
    mock.map(m => (
        m.newsFirst.map(a => (
            otherNewsFirst.innerHTML += `
            <div class="news-div">
                <h2 class="other-news__h2">${a.title}</h2>
                <img class="all-images" src="${a.imagem}" alt="random image">
                <p class="other-news__p">${a.new}</p>
            <div>
        `
        ))
    ))
}

const genereteNewsSecond = () => {
    mock.map(m => (
        m.newsSecond.map(a => (
            otherNewsSecond.innerHTML += `
            <div class="news-div">
                <h2 class="other-news__h2">${a.title}</h2>
                <img class="all-images" src="${a.imagem}" alt="random image">
                <p class="other-news__p">${a.new}</p>
            <div>
        `
        ))
    ))
}
export const initThirdSection = () => {
    genereteScienceFirst()
    genereteScienceSecond()
    genereteScienceThird()
    genereteScienceFourth()
    genereteImageScience()
    generetePlay()
    generetePopularInTheTime()
    genereteNews()
    genereteNewsFirst()
    genereteNewsSecond()
    now()
}
