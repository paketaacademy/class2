import { PAID } from "../mockup/mock-paid.js";

const paid_box = document.querySelector(".paid-box")

function factoryPaidTxt(array){
    let position = 0
    array = array[position]
    paid_box.innerHTML =
        `<div class="paid-txt">
            <a href="post.html" class="paid-link">    
                <p class="p-author">${array.author}</p>
            </a>
            <a href="post.html" class="paid-link">
                <h3 class="T-paid">${array.title}</h3>
            </a>
            <a href="post.html" class="paid-link">
                <p class="p-txt">${array.description}</p>
            </a>
        </div>
        <div class="paid-img">
            <a href="post.html" class="paid-link">
                <img src="${array.img1}" alt="">
            </a>
        </div>
        <div class="paid-anunce">
            <a href="post.html" class="paid-link">
                <img src="${array.img2}" alt="">
            </a>
        </div>`
}

export function initPaid(){
    factoryPaidTxt(PAID)
}