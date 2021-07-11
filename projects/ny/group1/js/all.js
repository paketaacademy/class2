import { header } from "../js/header.js"
import { initNavbar } from "../js/header.js"
import { initHero } from "../js/hero.js"
import { initMainRight } from "../js/quotes.js"
import { initMoreNews } from "../js/moreNews.js"
import { initMainLeft } from "../js/rightMid.js"
import { initPaid } from "../js/paid.js"
import { initSmallSec } from "../js/script-games-womens-cooking.js"
import { initScience } from "../js/script-science-feature.js"
import { scroll } from "../js/script.js"

const init = () => {
    header()
    initNavbar()
    initHero()
    initMainLeft()
    initMainRight()
    initMoreNews()
    initScience()
    initPaid()
    initSmallSec()
    scroll()
}

init()