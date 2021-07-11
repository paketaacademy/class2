import { moreNews } from "../mockup/mock-moreNews.js"
import { right_news } from "../mockup/mock-moreNews.js"

const factoryLeftNews = (datas, container) => {
    let noImg_data = datas.filter((v) => {
        if (v.type === "2for1_noimg") {
            return v
        }
    })
    noImg_data.map((v) => {
        v.used = false
    })
    let img_data = datas.filter((v) => {
        if (v.type === "2for1") {
            return v
        }
    })
    img_data.map((v) => {
        v.used = false
    })

    datas.map((v) => {
        if (v.type === "2for1_noimg" && !v.used) {
            let first_content = `
            <a href="#">
                <div class="fr_first_content">
                    <h3 class="news_title">${v.title}</h3>
                    <p class="news_description">${v.short_description}</p>
                </div>
            </a>`
            v.used = true
            let second_content = ""
            const noUsedData = datas.filter((value) => {
                if (!value.used && value.type === "2for1_noimg") {
                    return value
                }
            })[0]
            if (noUsedData) {
                second_content = `
                <a href="#">
                    <div class="fr_second_content">
                        <h3 class="news_title">${noUsedData.title}</h3>
                        <p class="news_description">${noUsedData.short_description}</p>
                    </div>
                </a>`
                noUsedData.used = true
            }
            container.innerHTML += `
            <div class="mn_first_row">
                ${first_content} 
                ${second_content}
            </div> `
        }
        else if (v.type === "2for1" && !v.used) {
            let first_content = `
            <a href="#">
                    <div class="sr_first_content">
                        <h3 class="news_title sr_small_title">${v.title}</h3>
                        <p class="news_description">${v.short_description}</p>
                    </div>
                </a>
                <a href="#">
                    <div class="sr_second_content">
                        <img src=${v.image} alt="" width="330">
                        <p class="news_subtitle">${v.subtitle}</p>
                    </div>
                </a>`
            v.used = true
            let second_content = ""
            const noUsedData = datas.filter((value) => {
                if (!value.used && value.type === "2for1") {
                    return value
                }
            })[0]
            if (noUsedData) {
                second_content = `
                <a href="#">
                    <div class="sr_third_content sr_small_title">
                        <h3 class="news_title">${noUsedData.title}</h3>
                        <p class="news_description">${noUsedData.short_description}</p>
                    </div>
                </a>`
                noUsedData.used = true
            }
            container.innerHTML += `
            <div class="mn_second_row"> 
                ${first_content}
                ${second_content}
            </div>`
        }
    })
}

const factoryRightNews = (datas, container) => {
    datas.map((v) => {
        container.innerHTML += `
        <a href="#" class="mn_link_title">
            <h3>${v.title}</h3>
        </a>`
    })
}
const leftContainer = document.querySelector(".mn_left_container")
const rightContainer = document.querySelector(".mn_right_container")

export function initMoreNews() {
    factoryLeftNews(moreNews, leftContainer)
    factoryRightNews(right_news, rightContainer)    
}