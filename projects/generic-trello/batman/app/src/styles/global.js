import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');

  html, body, #root{
    margin: auto;
    height: auto;
  }

  body{
    font: 14px 'Roboto', sans-serif;
    background: rgb(255 255 224);
    color: rgb(54 54 54);
    --webkit-font-smoothing: antialiased !important;
    margin: auto;
  }

  ul{
    list-style: none;
  }
`