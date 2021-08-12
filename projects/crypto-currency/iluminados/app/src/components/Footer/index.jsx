import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Container, Title , Icon , Ul, Ultwo } from './style';


export const Footer = () => {
    
        return(
            <div>
                <Container>
                <Icon>
                <a href="#">< FacebookIcon /></a>
                <a href="#"><InstagramIcon /></a>
                <a href="#"><TwitterIcon /></a>
                </Icon>
                <Ul>
                    
                    <ul>
                    <a href="#"><li>What is LunarCRUSH?</li></a>
                    <a href="#"><li>About Us</li></a>
                    <a href="#"><li>Terms</li></a>
                    </ul>
                    
                <Ultwo>
                    
                    <ul>
                    <a href="#"><li>Privacy</li></a>
                    <a href="#"><li>Podcasts</li></a>
                    <a href="#"><li>Shop</li></a>
                    </ul>
                
                </Ultwo>
                    <ul>
                    <a href="#"><li>Help</li></a>
                    <a href="#"><li>Get Listed</li></a>
                    
                    </ul>
                </Ul>
                <div>
                    <Title>© 2021 - ILUMINADOS</Title>
                </div>
                </Container>
            </div>
        )    
}
