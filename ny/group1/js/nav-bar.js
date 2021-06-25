import { NAV_BAR } from "../mockup/mock-navBar.js";
const boxNavBar = document.querySelector(".nav-bar")

/* function NavBar(array){
    boxNavBar.innerHTML = `
        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[0]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[1]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[2]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[3]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[4]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[5]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[6]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[7]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[8]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[9]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[10]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[0]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[11]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[12]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[13]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[14]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[15]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[16]}</a>
        </li>

        <li class="link-nav-bar">
            <a href="post.html" class="link-nav">${array[17]}</a>
        </li>
    `
} */

function NavBar(array){
    for (let i = 0; i < array.length; i++){
        boxNavBar.innerHTML += `
            <li class="link-nav-bar">
                <a href="post.html" class="link-nav">${array[i]}</a>
            </li>
        `
    }
}

NavBar(NAV_BAR)