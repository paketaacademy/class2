import { NEWS_LIST } from "./mockupForNews.js";
import { initThirdSection } from "./section--news.js";

const mock = NEWS_LIST

let principalNews = document.querySelector(".principal-news")
let liveUpdatesImg = document.querySelectorAll(".live-updates__ul--img")
let liveUpdatePrimaries = document.querySelector(".live-update-primaries")
let someOtherNews = document.querySelector(".some-other-news")


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

const genereteLiveUpdatesPrimaries = () => {
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

const genereteSomeOtherNews = () => {
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


firstPageNew()
genereteImages()
genereteLiveUpdatesPrimaries()
genereteSomeOtherNews()
initThirdSection()