const boxDate = document.querySelector('.box-date')
const boxWeather = document.querySelector(".box-weather")
const data = new Date()

const opcoes = {
    dateStyle: 'full'
}
boxDate.innerHTML = data.toLocaleDateString('pt-BR', opcoes)

boxWeather.innerHTML = data.toLocaleTimeString('pt-BR');