import React from "react"
import Link from '@material-ui/core/Link'
import Image from "./img/image-intro-desktop.jpg"
import ImageRight from "./img/bg-pattern-intro-right-desktop.svg"
import ImageLeft from "./img/bg-pattern-intro-left-desktop.svg"
import {
    SubmitButton, Container, Text, Hr, DivImage, Img, ImgRight, ImgLeft, H1, P, Div,
    ImgContainer, ImgRightContent

} from './styled'

export default function Main() {
    const preventDefault = (event) => event.preventDefault();
    return (
        <Container>
            <ImgContainer>
                <ImgLeft src={ImageLeft} />
            </ImgContainer>
            <Text>
                <Hr />
                <H1>
                    Humanizing
                    your insurance.
                </H1>
                <P>
                    Get your life insurance coverage easier and faster. We blend our expertise
                    and technology to help you find the plan that´s right for you. Ensure you
                    and your loved ones are protected.
                </P>
                <Link href="#" onClick={preventDefault} >
                    <SubmitButton variant="outlined">VIEW PLANS</SubmitButton>
                </Link>
            </Text>

            <DivImage>
                <Div>
                    <Img src={Image} alt="family" />
                </Div>
                <ImgRightContent>
                    <ImgRight src={ImageRight} />
                </ImgRightContent>
            </DivImage>

        </Container>
    )
}
