import styled, {css} from 'styled-components'

export const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    flex-direction: column;
    width: 240px;
    color: white;
    margin: auto; 
`
export const Content = styled.div`

`

export const Logo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1.5rem; 
`

export const LogoImg = styled.img`
    width: 80px;
    height: 80px;
`

export const TitleApp = styled.h1`
    font-size: 30px;
    margin-bottom: 20px;
    @media (max-width:800px){
        font-size: 130%;
    }
`

export const LoginApp = styled.div`
    background-color: 29292E;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 240px;
`
export const MenuContent = styled.div`
    width: 240px;
`

export const LoginHeader=styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const MenuButton = styled.div`
    ${({ isActive }) => isActive && 
        css`
        border-bottom: 2px solid #00ce65;
    ` }
    padding: 0.3rem;
`
