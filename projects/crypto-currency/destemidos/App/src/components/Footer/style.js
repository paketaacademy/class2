import styled from "styled-components"

export const Rodape = styled.footer`
    max-width: 100%;
    color: #fff;
    margin: 0 auto;
    align-self: center;
    align-items: center;
    background: #141518;
    display: flex;
    padding: 10px;
    justify-content: space-around;
    flex: 1;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    box-sizing: border-box;
    font-size: 0.875rem;
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    line-height: 1.43;
    height: 160px;
    flex-direction: column;
    margin-left: 88px;
}

`
export const SocialWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%; 
`
export const MediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;   
`
export const IconsWrap = styled.div`
margin-left: 10px;`


export const ListWrap = styled.div`
display: flex;
margin-top:20px;
padding-left: 12px;
align-items: collumn;
justify-content: space-evenly;
color: #fff;
transition: all 100ms ease-in-out;
font-weight: 300;
margin-left: 0px;
white-space: nowrap;
margin-right: 10px;
list-style: none;

`

export const FinalText = styled.div`
 color: #aeb1b5;
 text-align: center;
 font-weight: 600;
 display: flex;
 justify-content: center;
 font-size: 16px;
 margin-top: 20px;
 
`

export const SocialIcon = styled.img`
width: 30px;
height: 30px;
`
export const Link = styled.a`
margin: 0px 5px;
`
export const Anchor = styled.a`
margin-right: 10px;
color: #fff;
text-decoration: none;
&:hover {
    color: #12c7ff;
}
`



