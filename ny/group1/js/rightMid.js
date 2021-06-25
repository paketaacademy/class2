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
factoryMid(mid, midContainer)



{/*
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
    */}



// 2for1

{/* <div name="2for1" class="left_first_container">
<div class="left_post">
    <div class="left_content">
        <a href="#">
            <h3 class="post_title">Supreme Court Rules for Cheerleader Punished for Vulgar Snapchat
                Message</h3>
        </a>
        <a href="#">
            <p class="post_short_description">Supreme Court Rules for Cheerleader Punished for
                Vulgar
                Snapchat Message</p>
        </a>
    </div>
    <div class="right_content">
        <a href="#">
            <img class="post_image"
                src="https://static01.nyt.com/images/2021/06/23/us/politics/23dc-scotus-student/merlin_186996009_e6acdca2-e0c9-435b-803d-4bc6724ac517-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
                alt="image" width="300">
        </a>
        <a href="#">
            <p class="post_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quam
                itaque? Est atque enim rerum autem itaque sed, aperiam accusantium</p>
        </a>
    </div>
</div>
<div class="right_post">
    <a href="#">
        <h4 class="post_title">Supreme Court Rules Against Usless... </h4>
    </a>
    <a href="#">
        <p class="post_short_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ut,
            maxime deleniti cumque dolores, laborum impedit praesentium vel delectus quo temporibus
            modi. Culpa nobis, atque nisi error tempore ab recusandae autem.</p>
    </a>
</div>
</div> */}


// 3for1
{/* <div name="3for1" class="left_fifith_container">
<div class="left_post">
    <a href="#">
        <h3 class="post_title">Scientist Finds Early Virus Sequences That Had Been Mysteriously
            Deleted
        </h3>
    </a>
    <a href="#">
        <p class="post_short_description">
            The sequences are intriguing new information for discerning when and how the virus may
            have
            spilled over from a bat or another animal into humans.
        </p>
    </a>
</div>
<div class="mid_post">
    <a href="#">
        <h4 class="post_title">U.S. to Send Brazil 3 Million Doses of J&J’s Vaccine
        </h4>
    </a>
    <a href="#">
        <p class="post_short_description">
            The shipment is part of President Biden’s pledge to send 80 million doses of vaccines
            abroad
            by the end of the month. Here’s the latest on Covid-19.
        </p>
    </a>
</div>
<div class="right_post">
    <a href="#">
        <h4 class="post_title">U.S. to Send Brazil 3 Million Doses of J&J’s Vaccine
        </h4>
    </a>
    <a href="#">
        <p class="post_short_description">
            The shipment is part of President Biden’s pledge to send 80 million doses of vaccines
            abroad
            by the end of the month. Here’s the latest on Covid-19.
        </p>
    </a>
</div>
</div> */}


// 1for1_sub
{/* <div name="1for1_sub" class="left_third_container">
<h5 class="category">The Great Read</h5>
<div class="post">
    <div class="left_content">
        <a href="#">
            <h3 class="post_title">The Little Hedge Fund Taking Down Big Oil</h3>
        </a>
        <a href="#">
            <p class="post_short_description">An activist investment firm won a shocking victory at
                Exxon Mobil. But can new directors really put the oil giant on a cleaner path?</p>
        </a>
    </div>
    <div class="mid_content">
        <a href="#">
            <img src="https://static01.nyt.com/images/2021/06/23/us/politics/23dc-scotus-student/merlin_186996009_e6acdca2-e0c9-435b-803d-4bc6724ac517-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
                alt="" width="310">
        </a>
    </div>
    <div class="right_content">
        <p class="post_subtitle">Chris James, the founder of the investment firm Engine No.</p>
    </div>
</div>
</div> */}


//1for1
{/* <div name="1for1" class="left_fourth_container">
<div class="post">
    <div class="left_content">
        <a href="#">
            <h3 class="post_title">Democrats Show New Urgency on Crime, Signaling a Shift</h3>
        </a>
        <a href="#">
            <p class="post_short_description">Eric Adams’s lead in the New York mayoral race and
                President Biden’s new crime-fighting agenda point to a move by Democrats toward
                public
                safety.</p>
        </a>
    </div>
    <div class="right_content">
        <a href="#">
            <img src="https://static01.nyt.com/images/2021/06/23/us/politics/23dc-scotus-student/merlin_186996009_e6acdca2-e0c9-435b-803d-4bc6724ac517-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
                alt="" width="450">
        </a>
    </div>
</div>
</div>  */}


//1for1_noimg

{/* <div name="1for1_noimg" class="left_sixth_container">
<div class="post">
    <div class="left_content">
        <a href="#">
            <h3 class="post_title">John McAfee, Software Pioneer Turned Fugitive, Dies in Spanish
                Prison
            </h3>
        </a>
    </div>
    <div class="right_content">
        <a href="#">
            <p class="post_short_description">Mr. McAfee, who has not been associated with the
                company
                that bears his name for more than two decades, was fighting extradition to the
                United
                States.</p>
        </a>
    </div>
</div>
</div> */}
