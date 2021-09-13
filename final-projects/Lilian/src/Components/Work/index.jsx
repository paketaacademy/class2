import React from "react"
import Link from '@material-ui/core/Link'
import Image from './img/bg-pattern-how-we-work-desktop.svg'
import { WorkButton , Div , Img} from "./styled"

export default function work() {
    const preventDefault = (event) => event.preventDefault()
    return(
        <Div>
             <Img scr={Image} />
            <h1>Find out more <br />
             about how we work</h1>
             <Link href="#" onClick={preventDefault} >
                    <WorkButton variant="outlined">HOW WE WORK</WorkButton>
            </Link>
           
        </Div>
    )

}