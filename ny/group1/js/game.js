const games = document.querySelector(".games")

const GAMES_LIST =[
    {
        titulo: "Try Letter Boxed",
        description:"Create words using letters round the square. Start solving.",
    },
    {
        titulo: "The cross word",
        description:"Solve the daily puzzle edited by Will Shortz.",
    },
    {
        titulo: "Spelling Bee",
        description: "Use 7 letters to make as many words as you can.",
    },
    {
        titulo: "Vortex",
        description: "Connect the dots to reveal the hidden picture.",
    },
]

function factoryGame (array){
    let elementGames = []
    elementGames = []
    for (let i = 0; i < array.length; i++){
        elementGames.push(`
            <div class="games-js">
                <div class="description">
                    <a href="#" class="link-games"> <h3 class="description-h">${array[i].titulo}</h3><a>
                    <a href="#" class="link-games"> <p class="description-p">${array[i].description}</p><a>
                </div>
                <div class="img-game">
                    <a href="#" class="link-games"><img src="http://lorempixel.com/91/91/"></a>
                </div>
            </div>
        `
        )
    }
    games.innerHTML = elementGames
}

factoryGame(GAMES_LIST)
