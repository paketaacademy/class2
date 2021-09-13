import React from "react"
import affordable from "./icones/icon-affordable-prices.svg"
import Snappy from "./icones/icon-snappy-process.svg"
import People from "./icones/icon-people-first.svg"
import {
     Hr, Title,  Img, H2, P , Ul , Li
}
from "./styled"

export default function Different() {
    return (
        <>
            <Hr />
            <Title>We`re different </Title>
            <>
                <Ul>
                    <Li>
                        <Img src={Snappy} alt="Icon snappy process" />
                        <H2>Snappy Process </H2>
                        <P>Our application process can be completed in <br />
                            minutes, not hours. Don´t get stuck filling in <br />
                            tedious forms. <br />
                        </P>
                    </Li>
                    <Li>
                        <Img src={affordable} alt="Icon affordable preces" />
                        <H2>Affordable Preces </H2>
                        <P>
                            We don´t want you woeying about high monthly <br />
                            costs. Our prices may be low. But we still offer <br />
                            the best coverage possible.
                        </P>
                    </Li>
                    <Li>
                        <Img src={People} alt="Icon people first" />
                        <H2>People First </H2>
                        <P>
                            Our plans aren´t full of conditions and clauses <br />
                            to prevent payouts. We make sure you´re <br />
                            covered when need it.
                        </P>
                    </Li>
                </Ul>
            </>

        </>
    )
}
