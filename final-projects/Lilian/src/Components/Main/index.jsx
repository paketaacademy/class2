import React from "react"
import Link from '@material-ui/core/Link'
import Image from "./img/image-intro-desktop.jpg"
import ImageRight from "./img/bg-pattern-intro-right-desktop.svg"
import ImageLeft from "./img/bg-pattern-intro-left-desktop.svg"
import { SubmitButton , Container , Text , Hr , DivImage , Img , ImgRight , ImgLeft 
    , H1

} from './styled'

export default function Main() {
    const preventDefault = (event) => event.preventDefault();
    return(
        <Container>
            <Text>
                <Hr />                
                <H1>                    
                Humanizing <br />
                your insurance.
                </H1>
                <p>
                Get your life insurance coverage easier and faster. We blend our expertise <br />
                and technology to help you find the plan that´s right for you. Ensure you <br />
                and your loved ones are protected.
                </p>
                <Link href="#" onClick={preventDefault} >
                    <SubmitButton variant="outlined">VIEW PLANS</SubmitButton>
                </Link>  
             <div>
                     <ImgLeft src={ImageLeft} /> 
            </div>             
                              
            </Text>

            

            <DivImage>
               
                <Img src={Image} alt="family" />
                
                <div>
                    <ImgRight src={ImageRight} />
                </div>
                

                
            </DivImage>

            
                

        </Container>
    )
}