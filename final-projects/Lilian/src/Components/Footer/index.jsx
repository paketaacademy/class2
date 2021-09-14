import React from "react"
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import PinterestIcon from '@material-ui/icons/Pinterest'
import InstagramIcon from '@material-ui/icons/Instagram'
import Image from "./img/bg-pattern-footer-desktop.svg"
import {
    Container , Icones , H1 , Hr , List , Ul , Li , Title , Header , Img
}
from "./styled"

export default function Footer() {
    return(
        <Container>            
            <Header>                
                    <Img src={Image} />                
                <div>                    
                    <H1>INSURE</H1>
                </div>
                <Icones>
                    <FacebookIcon color="action"/>
                    <TwitterIcon color="action" />
                    <PinterestIcon color="action" />
                    <InstagramIcon color="action" />                    
                </Icones>               
            </Header>
            <Hr />  
            <List>                
                    <Ul>
                        <Title><Li>OUR COMPANY</Li></Title>
                        <Li>HOW WE WORK</Li>
                        <Li>WHY INSURE?</Li>
                        <Li>VIEW PLANS</Li>
                        <Li>REVIEWS</Li>
                    </Ul>
                    
                    <Ul>
                        <Title><Li>HELP ME</Li></Title>
                        <Li>FAQ</Li>
                        <Li>TERMS OF USE</Li>
                        <Li>PRIVACY POLiCY</Li>
                        <Li>COOKIES</Li>                    
                    </Ul>
                                
                <Ul>
                    <Title><Li>CONTACT </Li></Title>
                    <Li>SALES</Li>
                    <Li>SUPPORT</Li>
                    <Li>LIVE CHAT</Li>                    
                </Ul>
                <Ul>

                    <Title><Li>OTHERS </Li></Title>   
                    <Li>CARERS</Li>
                    <Li>PRESS</Li>
                    <Li>LICENSES</Li>                    
                </Ul>
            </List>
        </Container>
    )
}
