import React from "react"
import Link from '@material-ui/core/Link'
import Image from "./img/bg-pattern-how-we-work-desktop.svg"
import {
     WorkButton , Div , Img , H1 
    }
from "./styled"

export default function work() {
    const preventDefault = (event) => event.preventDefault()
    return(
        <Div>
            <>             
                <H1>Find out more <br />
                about how we work</H1>
                <Link href="#" onClick={preventDefault} >
                        <WorkButton variant="outlined">HOW WE WORK</WorkButton>                     
                </Link>
             </>
            <div>
                <Img src={Image} alt="" />
            </div>           
        </Div>
    )

}