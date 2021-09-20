import React, { useState } from 'react'
import { Page, Content, Logo, LogoImg, TitleApp, LoginApp, MenuContent, LoginHeader, MenuButton } from './styled.js'
import LogoSpotify from './logo-spotify-icon.png'
import SignIn from '../SignIn/index.jsx'
import SignUp from '../SignUp/index.jsx'

function Home() {
    const [content, setContent] = useState('SignIn')

    const handleContent = (contentName) => {
        setContent(contentName)
    }

    return (
        <Page>
            <Content>
                <Logo>
                    <LogoImg src={LogoSpotify} />
                    <TitleApp>Spotify</TitleApp>
                </Logo>

                <LoginApp>
                    <MenuContent>
                        <LoginHeader>
                            <MenuButton isActive={content === 'SignIn'} onClick={() => handleContent('SignIn')}>SIGN IN</MenuButton>
                            <MenuButton isActive={content === 'SignUp'} onClick={() => handleContent('SignUp')}>SIGN UP</MenuButton>
                        </LoginHeader>
                    </MenuContent>
                    {content === 'SignIn' && (<SignIn />)}
                    {content === 'SignUp' && (<SignUp />)}
                </LoginApp>
            </Content>
        </Page>
    )
}

export default Home