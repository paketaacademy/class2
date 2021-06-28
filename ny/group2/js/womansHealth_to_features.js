import { NEWS_LIST } from "./mockupForNews.js";

const mock = NEWS_LIST

let womansHealt = document.querySelector(".woman")
let featuresDiv = document.querySelector(".features")
let nytCooking = document.querySelector(".nyt1")


const generateWomansHealth = () =>{
    mock.map(m => (
        m.womansHealth.map(z => (
            womansHealt.innerHTML += `
            <div class="teste1">
                <img src="${z.image}" alt="" />
                <h3 class="womans-healt_h3">${z.title}</h3>
            </div>
                `
        ))
    ))
}

const generateNytCooking = () =>{
    mock.map(m => (
        m.nytCooking.map(b => (
            nytCooking.innerHTML +=`
            <div class="nyt">
                <img src="${b.image}" alt="" />
                <h3 class="nyt-cooking_h3">${b.title}</h3>
            </div>    
            `
        ))

    ))
}

const generateFeatures = () => {
    mock.map(m => (
        featuresDiv.innerHTML = `
        <div class="features-main-container">
            <div class="features-main-container__img">
                <img src="${m.features[0].image}" alt="#">
            </div>
            <h2 class="features-main-container__h2">${m.features[0].title}</h2>
            <p class="features-main-container__p">${m.features[0].subtitle}</p>
        </div>
        <div class="features-right-side">
            <div class="features-horizontal-container">
                <div class="features-vertical-container">
                    <div class="features-vertical-container__img">
                        <img src="${m.features[1].image}" alt="#">
                    </div>
                    <h3 class="features-vertical-container__h3">${m.features[1].title}</h3>
                    <p class="features-vertical-container__p">${m.features[1].subtitle}</p>
                </div>
                <div class="features-vertical-container">
                    <div class="features-vertical-container__img">
                        <img src="${m.features[2].image}" alt="#">
                    </div>
                    <h3 class="features-vertical-container__h3">${m.features[2].title}</h3>
                    <p class="features-vertical-container__p">${m.features[2].subtitle}</p>
                </div>
            </div>
            <div class="features-horizontal-container">
                <div class="features-vertical-container">
                    <div class="features-vertical-container__img">
                        <img src="${m.features[3].image}" alt="#">
                    </div>
                    <h3 class="features-vertical-container__h3">${m.features[3].title}</h3>
                    <p class="features-vertical-container__p">${m.features[3].subtitle}</p>
                </div>
                <div class="features-vertical-container">
                    <div class="features-vertical-container__img">
                        <img src="${m.features[4].image}" alt="#">
                    </div>
                    <h3 class="features-vertical-container__h3">${m.features[4].title}</h3>
                    <p class="features-vertical-container__p">${m.features[4].subtitle}</p>
                </div>
            </div>
        </div>
        `
    ))
}

export const initSecondSection = () =>{
    generateNytCooking()
    generateWomansHealth()
    generateFeatures()
}


