const randomDog = () => {
  const placeholder = Math.floor(Math.random() * 500) + 600

  return `https://placedog.net/${placeholder}`
}

const news = [
  {
      "title":"New Yorkers Vote in Acrimonious Mayoral Primary",
      "description":"New Yorkers vote today in a mayoral race defined by clashes over public safety, the economy and ethics that turned ugle in the final stretch.",
      "author":"",
      "legend":"",
      "image": randomDog()
},
  {
      "title":"",
      "description":"It will be the city's first mayoral elections that uses ranked-choice voting, a system that may delay the declaration of a winner for weeks.",
      "author":"",
      "legend":"",
      "image": randomDog()
}, 
  {
      "title":"",
      "description":"",
      "author":"",
      "legend":"",
      "image":"/class2/ny/group3/Imagens/marco-oriolesi-wqLGlhjr6Og-unsplash.jpg"
},
  {
      "title":"How New Yorkers Feel About Ranked-Choice Voting",
      "description":"Voters are using a new system citywide for the first time, but many seemed characteristically unfazed: It's real easy if people just learn how to read.",
      "author":"",
      "legend":"",
      "image": randomDog()
},
  {
      "title":"Read our New York Today newsletter for a guide to casting your ballot and navigating ranked-choice voting.",
      "description":"Voters are using a new system citywide for the first time, but many seemed characteristically unfazed: It's real easy if people just learn how to read.",
      "author":"",
      "legend":"",
      "image": randomDog()
}
]

export {
  news
}