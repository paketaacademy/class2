
import { news } from './file1.js'



const renderRataria = () => {
  const allItems = news.map((rato) => `
    
    <li class="li-nome">
    <a href="#"><span>${rato.title}</span></a>
  </li>
  `)

  document.getElementById("news").innerHTML = allItems
}


const initiliaze = () => {
  renderRataria()
  console.log("Inicializando a rataria")
}


export default initiliaze