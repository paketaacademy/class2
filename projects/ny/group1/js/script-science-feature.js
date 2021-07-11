import { LISTFEATURE } from "../mockup/mock-sience-feature.js"
import { LISTSCIENCE } from "../mockup/mock-sience-feature.js"

const pf = document.querySelectorAll(".pf")
const tf = document.querySelectorAll(".tf")
const sbf = document.querySelectorAll(".sif")
const ps = document.querySelectorAll(".ps")
const ts = document.querySelectorAll(".ts")
const imgsience = document.querySelector(".img-science-2")

function factoryFeature(array){
    
    for (let i = 0; i < array.length; i++){
        
        pf[i].innerHTML = 
            `${array[i].paragrafo}`
        tf[i].innerHTML =
            `${array[i].titulo}`
        sbf[i].innerHTML =
            `${array[i].img}`
        
    }
}

function factoryScience(array){
    
    for (let i = 0; i < array.length; i++){
        ps[i].innerHTML = 
            `${array[i].paragrafo}`
        ts[i].innerHTML =
            `${array[i].titulo}`
    }
    imgsience.innerHTML = `<img src="http://lorempixel.com/380/253/" alt=""></img>`
}

export function initScience() {
    factoryScience(LISTSCIENCE)
    factoryFeature(LISTFEATURE)
} 
