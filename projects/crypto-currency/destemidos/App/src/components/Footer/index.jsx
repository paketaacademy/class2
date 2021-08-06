import React from 'react'
import { Rodape, FollowWrap, FollowDonate, UlWrap, FinalText } from './style'
// import { faTwitter, faTelegramPlane, faRedditAlien, faLinkedinIn, faFacebookF, faInstagram, faDiscord } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { render } from "react-dom"



function Footer() {
    return (
        <Rodape>
            <FollowWrap>
                <div><p>Follow</p>
                    <div class="left">
                        {/* <FontAwesomeIcon icon={[faTwitter]} fixedWidth />
                    <FontAwesomeIcon icon={[faTelegramPlane]} fixedWidth />
                    <FontAwesomeIcon icon={[faRedditAlien]} fixedWidth />
                    <FontAwesomeIcon icon={[faRedditAlien]} fixedWidth />
                    <FontAwesomeIcon icon={[faLinkedinIn]} fixedWidth />
                    <FontAwesomeIcon icon={[faFacebookF]} fixedWidth />
                    <FontAwesomeIcon icon={[faInstagram]} fixedWidth />
                    <FontAwesomeIcon icon={[faDiscord]} fixedWidth /> */}
                    </div>
                </div>



                <div><p>Donate</p>
                    <div class="right">
                        {/* <FontAwesomeIcon icon={[faTwitter]} fixedWidth />
                    <FontAwesomeIcon icon={[faTelegramPlane]} fixedWidth />
                    <FontAwesomeIcon icon={[faRedditAlien]} fixedWidth />
                    <FontAwesomeIcon icon={[faRedditAlien]} fixedWidth />
                    <FontAwesomeIcon icon={[faLinkedinIn]} fixedWidth />
                    <FontAwesomeIcon icon={[faFacebookF]} fixedWidth />
                    <FontAwesomeIcon icon={[faInstagram]} fixedWidth />
                    <FontAwesomeIcon icon={[faDiscord]} fixedWidth /> */}
                    </div>
                </div>

            </FollowWrap>
            <FollowDonate>

                <UlWrap>
                    <div>What is LunarCRUSH?</div>
                    <div>About Us</div>
                    <div>Terms</div>
                    <div>Privacy</div>
                    <div>Podcasts</div>
                    <div>Shop</div>
                    <div>Help</div>
                    <div>Get listed</div>
                </UlWrap>
                <div>
                    <FinalText>© 2021 LunarCRUSH Inc. All rights reserved.</FinalText>
                </div>
            </FollowDonate>
        </Rodape>
    )
}

render(<index />, document.getElementById("root"));
export default Footer



