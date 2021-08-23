import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap')

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    margin: 0;
  }

  body{
    font: 14px 'Roboto', sans-serif;
    background: rgb(255 255 224);
    color: rgb(54 54 54);
    --webkit-font-smoothing: antialiased !important;
    margin: 0;
  }

  ul{
    list-style: none;
  }
`