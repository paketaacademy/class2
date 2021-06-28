import { mid } from "../mockup/mock-mid.js"

const factoryMid = (mid, container) => {
    let double_posts = mid.filter((v, i, a) => {
        if (v.type === "2for1") {
            return v
        }
    })
    double_posts = double_posts.map((v) => {
        v.used = false
        return v
    })
    let triple_posts = mid.filter((v, i, a) => {
        if (v.type === "3for1") {
            return v
        }
    })
    triple_posts = triple_posts.map((v) => {
        v.used = false
        return v
    })
    mid.map((v) => {
        if (v.type === "1for1") {
            container.innerHTML += `
            <div name="1for1" class="left_fourth_container">
                <div class="post">
                    <div class="left_content">
                        <a href="#">
                            <h3 class="post_title">${v.title}</h3>
                        </a>
                        <a href="#">
                            <p class="post_short_description">${v.short_description}</p>
                        </a>
                    </div>
                    <div class="right_content">
                        <a href="#">
                            <img src=${v.image}
                                alt="" width="450">
                        </a>
                    </div>
                </div>
            </div>`
        }
        else if (v.type === "1for1_sub") {
            container.innerHTML += `
            <div name="1for1_sub" class="left_third_container">
                <h5 class="category">The Great Read</h5>
                <div class="post">
                    <div class="left_content">
                        <a href="#">
                            <h3 class="post_title">${v.title}</h3>
                        </a>
                        <a href="#">
                            <p class="post_short_description">${v.short_description}</p>
                        </a>
                    </div>
                    <div class="mid_content">
                        <a href="#">
                            <img src=${v.image} alt="" width="310">
                        </a>
                    </div>
                    <div class="right_content">
                        <p class="post_subtitle">Chris James, the founder of the investment firm Engine No.</p>
                    </div>
                </div>
            </div>
            `
        }
        else if (v.type === "1for1_noimg") {
            container.innerHTML += `
            <div name="1for1_noimg" class="left_sixth_container">
                <div class="post">
                    <div class="left_content">
                        <a href="#">
                            <h3 class="post_title">${v.title}</h3>
                        </a>
                    </div>
                    <div class="right_content">
                        <a href="#">
                            <p class="post_short_description">${v.short_description}</p>
                        </a>
                    </div>
                </div>
            </div>`
        }
        else if (v.type === "2for1") {
            if (!v.used) {
                const other_post = double_posts.filter((value) => {
                    if (!value.used && value.title != v.title) {
                        return value
                    }
                })[0]
                const first_post = `
                <div class="left_post">
                    <div class="left_content">
                        <a href="#">
                            <h3 class="post_title">${v.title}</h3>
                        </a>
                        <a href="#">
                            <p class="post_short_description">${v.short_description}</p>
                        </a>
                    </div>
                    <div class="right_content">
                        <a href="#">
                            <img class="post_image"
                                src=${v.image} alt="image" width="300">
                        </a>
                        <a href="#">
                            <p class="post_subtitle">${v.subtitle}</p>
                        </a>
                    </div>
                </div>`
                v.used = true
                let second_post = ""
                if (other_post) {
                    second_post = `
                    <div class="right_post">
                    <a href="#">
                        <h4 class="post_title">${other_post.title} </h4>
                    </a>
                    <a href="#">
                        <p class="post_short_description">${other_post.short_description}</p>
                    </a>
                </div>`
                    other_post.used = true
                }
                container.innerHTML += `
                <div name="2for1" class="left_first_container">
                    ${first_post}
                    ${second_post}
                </div>`
            }
        }
        else if (v.type === "3for1") {
            if (!v.used) {
                const others_posts = triple_posts.filter((value) => {
                    if (!value.used && value.title != v.title) {
                        return value
                    }
                })
                const second_value = others_posts[0]
                const third_value = others_posts[1]
                const first_post = `
                <div class="left_post">
                    <a href="#">
                        <h3 class="post_title">${v.title}
                        </h3>
                    </a>
                    <a href="#">
                        <p class="post_short_description">${v.short_description}</p>
                    </a>
                </div>`
                v.used = true
                let second_post = ""
                if (second_value) {
                    second_post = `<div class="mid_post">
                    <a href="#">
                        <h4 class="post_title">${second_value.title}</h4>
                    </a>
                    <a href="#">
                        <p class="post_short_description">${second_value.short_description}</p>
                    </a>
                </div>`
                    second_value.used = true
                }
                let third_post = ""
                if (third_value) {
                    third_post = `<div class="right_post">
                    <a href="#">
                        <h4 class="post_title">${third_value.title}</h4>
                    </a>
                    <a href="#">
                        <p class="post_short_description">${third_value.short_description}</p>
                    </a>
                </div>`
                    third_value.used = true
                }
                container.innerHTML += `
                <div name="3for1" class="left_fifith_container">
                    ${first_post}
                    ${second_post}
                    ${third_post}
                </div>`
            }
        }
    })
}


const midContainer = document.querySelector(".left_container")

export function initMainLeft() {
    factoryMid(mid, midContainer)
}