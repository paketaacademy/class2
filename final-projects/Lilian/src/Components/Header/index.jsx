import React from "react"
import Link from '@material-ui/core/Link'
import { Container, Title, ViewButton , P } from './styled.js'

export default function header() {
    const preventDefault = (event) => event.preventDefault();
    return (
        <Container>
                <Title>INSURE</Title>  
            
            <div>            
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        
                    }}
                    >
                    <P>HOW WE WORK</P>
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {                     
                    }}
                    >
                    <P>BLOG</P>
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {                     
                    }}
                    >
                    <P>ACCONT</P>
                </Link>
                <Link href="#" onClick={preventDefault} >
                    <ViewButton variant="outlined">VIEW PLANS</ViewButton>
                </Link>
            
            </div>
        </Container>
    )
}