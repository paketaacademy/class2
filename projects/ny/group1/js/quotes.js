import { quotes } from "../mockup/mock-quotes.js"
import { editors } from "../mockup/mock-quotes.js"


const factoryQuotes = (quotes, container) => {
    let double_opinions = quotes.filter((v, i, a) => {
        if (v.type === "double_opinion") {
            return v
        }
    })
    double_opinions = double_opinions.map((v) => {
        v.used = false
        return v
    })
    quotes.map((v, i, a) => {
        if (v.type === "round_img") {
            container.innerHTML += `<div>
                    <a href="#">
                        <div class="opinion_container ">
                            <div class="author_information">
                                <h4 class="author_name">${v.author}</h4>
                                <h3 class="opinion">${v.opinion}</h3>
                            </div>
                            <img class="author_img round"
                                src=${v.image}
                                alt="" width="44" height="44">
                     </div>
                 </a>
            </div>`
        }
        else if (v.type === "square_img") {
            container.innerHTML += `
                <div name="square">
                    <a href="#">
                        <div class="opinion_container">
                            <div class="author_information">
                                <h4 class="author_name">${v.author}</h4>
                                <h3 class="opinion middle_size">${v.opinion}</h3>
                                <img class="author_img"
                                    src=${v.image}
                                    alt="" width="300" />
                            </div>
                        </div>
                    </a>
                </div>`
        }
        else if (v.type === "small_opinion") {
            container.innerHTML += `
                <div name="small">
                        <a href="#">
                            <div class="opinion_container">
                                <div class="author_information">
                                    <h4 class="author_name">${v.author}</h4>
                                    <h3 class="opinion middle_size">${v.opinion}</h3>
                                </div>
                                <img class="author_img round"
                                    src=${v.image}
                                    alt="" width="44" height="44">
                            </div>
                        </a>
                </div>`
        }
        else if (v.type === "no_image") {
            container.innerHTML += `
                <div name="no_img" class="opinion_container hard_border_top">
                    <a href="">
                        <div class="author_information">
                            <h4 class="author_name">${v.author}</h4>
                            <h3 class="opinion">${v.opinion}</h3>
                         </div>
                    </a>
                </div>`

        }
        else if (v.type === "double_opinion") {
            if (!v.used) {
                const unused_opinion = double_opinions.filter((value) => {
                    if (!value.used && value.author != v.author) {
                        return value
                    }
                })[0]
                const first_opinion = `
                <a href="#">
                    <div class="author_information">
                        <h4 class="author_name">${v.author}</h4>
                        <h3 class="opinion small_size">${v.opinion}</h3>
                    </div>
                </a>`
                v.used = true
                let second_opinion = ""
                if (unused_opinion) {
                    second_opinion = `
                    <a href="#">
                        <div class="author_information left_border">
                            <h4 class="author_name">${unused_opinion.author}</h4>
                            <h3 class="opinion small_size">${unused_opinion.opinion}</h3>
                        </div>
                    </a>`
                    unused_opinion.used = true
                }
                container.innerHTML += `
                    <div name="double_opinion" class="opinion_container hard_border p_50_bot">
                        ${first_opinion}
                        ${second_opinion}
                    </div>`
            }
        }

    })
}

const factoryEditor = (editors, container) => {
    let double_editors = editors.filter((v) => {
        if (v.type === "double") {
            return v
        }
    })
    double_editors = double_editors.map((v) => {
        v.used = false
        return v
    })
    editors.map((v) => {
        if (v.type === "basic") {
            container.innerHTML += `<div class="editors_container light_border_bot">
        <a href="#">
            <img src="${v.image}"
                alt="" width="300">
            <p class="editors_subtitle">${v.subtitle}</p>
            <h3 class="editors_title">${v.title}</h3>
            <h4 class="editors_description">${v.short_description}</h4>
        </a>
    </div>`
        }
        else if (v.type === "double") {
            if (!v.used) {
                const unused_editor = double_editors.filter((value) => {
                    if (!value.used && value.title != v.title) {
                        return value
                    }
                })[0]
                const first_editor = `
                <a href="#">
                    <div class="editors_information">
                        <img class="author_img"
                            src=${v.image} alt="" width="130">
                        <h3 class="editors_title small_editors_title">${v.title}</h3>
                    </div>
                </a>`
                v.used = true
                let second_editor = ""
                if (unused_editor) {
                    second_editor = `
                    <a href="#">
                        <div class="editors_information left_border">
                            <img class="author_img"
                                src=${unused_editor.image} alt="" width="130">
                            <h3 class="editors_title small_editors_title">${unused_editor.title}</h3>
                        </div>
                    </a>`
                    unused_editor.used = true
                }
                container.innerHTML += `
                <div class="editors_container flex extra_margin_bot">
                    ${first_editor}
                    ${second_editor}                    
                </div>`
            }
        }
    })
}

const quotesContainer = document.querySelector(".opinion_content")
const editorContainer = document.querySelector(".editor_content")

export function initMainRight() {
    factoryQuotes(quotes, quotesContainer)
    factoryEditor(editors, editorContainer)
}