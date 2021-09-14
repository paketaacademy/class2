import React, { useState } from 'react'
import { Page, Picture, Submit, Box, Logo, Login_right, Title_App, Connected, TextField, SignIn, Typography, Box_email, Box_password, Link } from './styled.js'
import Picture2 from './logo-spotify-icon.png'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    return (
        <Page>
            <Box>
                <Logo>
                    <Picture src={Picture2}/>
                        
                    <Title_App>Spotify</Title_App>
                </Logo>

                <Login_right>

                    <SignIn>

                        <Typography>SIGN IN</Typography>

                        <TextField>
                            <Box_email type="text"
                                placeholder="Enter Your Username"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
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

                    <Connected>stay signed in</Connected>

                    <Submit>
                        SIGN IN
                    </Submit>

                    <Link href="#" >
                        {"Forgot Password?"}
                    </Link>

                </Login_right>
            </Box>
        </Page>
    )
}

export default Login