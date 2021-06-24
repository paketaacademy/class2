import {items} from "../mockup/mock-hero.js"

const factoryItems = (items) => {
    items.map((item) => {
        itemsDiv.innerHTML += `
            <div class="hero__item">
                <a class="text__link" href="post.html">
                    <img src="${item.image}" alt="Ad cover">
                </a>
                <div class="hero__text">
                    <a class="text__link" href="post.html">
                        <h3 class="hero__h3">${item.title}</h3>
                        <p class="hero__p">${item.desc}</p>
                    </a>
                </div>
            </div>
        `
    })
}

let itemsDiv = document.querySelector('.hero__row')

factoryItems(items, itemsDiv)