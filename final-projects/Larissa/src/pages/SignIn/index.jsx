import React, { useState } from "react"
import { Login, TextField, BoxEmail, BoxPassword, CheckBox, Connected, Text, ButtonContent, Submit, LoginFooter } from "./styles.js"

function SignIn() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    return (
        <Login>
            <TextField>
                <BoxEmail type="text"
                    placeholder="Enter Your Username"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </TextField>

            <TextField>
                <BoxPassword
                    placeholder="Enter Your Password"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </TextField>

            <CheckBox>
                <Connected type="checkbox" id="Connected" name="Connected" />
                <Text for="Connected">stay signed in</Text>
            </CheckBox>

            <ButtonContent>
                <Submit>
                    SIGN IN
                </Submit>
            </ButtonContent>

            <LoginFooter>
                Forgot Password?
            </LoginFooter>
        </Login>
    )
}

export default SignIn