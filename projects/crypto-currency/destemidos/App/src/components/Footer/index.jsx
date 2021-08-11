import React from 'react'
import { Rodape, SocialWrap, MediaWrap, ListWrap, FinalText, SocialIcon, IconsWrap, Link, Anchor } from './style'
import { render } from "react-dom"
import Instagram from "../../Image/footer/instagram.svg"
import Reddit from "../../Image/footer/reddit.svg"
import Facebook from "../../Image/footer/facebook.svg"
import Linkedin from "../../Image/footer/linkedin.svg"
import Discord from "../../Image/footer/discord.svg"
import Twitter from "../../Image/footer/twitter.svg"
import Telegram from "../../Image/footer/telegram.svg"
import BinanceCoin from "../../Image/footer/binance-coin.png"
import Zilliqa from "../../Image/footer/zilliqa.png"
import Tezos from "../../Image/footer/tezos.png"
import Dogecoin from "../../Image/footer/dogecoin.png"
import Litecoin from "../../Image/footer/litecoin.png"
import Ethereum from "../../Image/footer/ethereum.png"
import Bitcoin from "../../Image/footer/bitcoin.png"
import Nimiq from "../../Image/footer/nimiq.png"

function Footer() {
    return (
        <Rodape>
            <SocialWrap>
                <MediaWrap>
                    <p>Follow</p>
                    <IconsWrap class="left">
                        <Link href="" alt="">
                            <SocialIcon src={Twitter}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Telegram}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Reddit}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Linkedin}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Facebook}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Instagram}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Discord}></SocialIcon>
                        </Link>
                    </IconsWrap>
                </MediaWrap>

                <MediaWrap>
                    <p>Donate</p>
                    <IconsWrap class="right">
                        <Link href="" alt="">
                            <SocialIcon src={BinanceCoin}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Zilliqa}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Tezos}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Dogecoin}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Litecoin}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Ethereum}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Bitcoin}></SocialIcon>
                        </Link>
                        <Link href="" alt="">
                            <SocialIcon src={Nimiq}></SocialIcon>
                        </Link>
                    </IconsWrap>
                </MediaWrap>

            </SocialWrap>
            <div>

                <ListWrap>
                    <Anchor href="" alt="">What is LunarCRUSH?</Anchor>
                    <Anchor href="" alt="">About Us</Anchor>
                    <Anchor href="" alt="">Terms</Anchor>
                    <Anchor href="" alt="">Privacy</Anchor>
                    <Anchor href="" alt="">Podcasts</Anchor>
                    <Anchor href="" alt="">Shop</Anchor>
                    <Anchor href="" alt="">Help</Anchor>
                    <Anchor href="" alt="">Get listed</Anchor>
                </ListWrap>
                <div>
                    <FinalText>© 2021 LunarCRUSH Inc. All rights reserved.</FinalText>
                </div>
            </div>
        </Rodape>
    )
}

render(<index />, document.getElementById("root"))
export default Footer