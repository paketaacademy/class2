import React, { useState } from 'react'
import { Text,CheckBox,Page, Picture, Submit, Logo, Login_right, Title_App, Connected, TextField, SignIn, Typography, Box_email, Box_password, Link1,Heading } from './styled.js'
import Picture2 from './logo-spotify-icon.png'
import {Link} from 'react-router-dom'

function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    return (
        <Page>

            <Logo>
                <Picture src={Picture2} />
                <Title_App>Spotify</Title_App>
            </Logo>

            <Login_right>
                <SignIn>
                    <Heading>
                    <Typography>SIGN IN</Typography>
                    <Link to='/Register'>
                    <Typography>SIGN UP</Typography>
                    </Link>
                    </Heading>

                    <TextField>
                        <Box_email type="text"
                            placeholder="Enter Your Username"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </TextField>

                    <TextField>
                        <Box_password
                            placeholder="Enter Your Password"
                            type={show ? "text" : "password"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </TextField>

                </SignIn>

                    <CheckBox>
                    <Connected type="checkbox" id="Connected" name="Connected"
                        checked/>
                    <Text for="Connected">stay signed in</Text>
                    </CheckBox>

                <Submit>
                    SIGN IN
                </Submit>

                <Link1 href="#" >
                    {"Forgot Password?"}
                </Link1>

            </Login_right>

        </Page>
    )
}

export default Login