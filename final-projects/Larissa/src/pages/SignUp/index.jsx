import React, { useState } from "react";
import { SignUp, Typography, TextField, Box_email, Box_password, Login, Submit } from './styled.js'

function Register() {
    const [name, setName] = useState("")
    const [confirm, setConfirm] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    return (
        <Login>
            <SignUp>
                <Typography> REGISTER</Typography>
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

                <TextField>
                    <Box_password
                        placeholder="Confirm Your Password"
                        type={show ? "text" : "password"}
                        value={confirm}
                        onChange={e => setConfirm(e.target.value)}
                    />
                </TextField>

                <Submit>
                    OK
                </Submit>

            </SignUp>
        </Login>
    )
}

export default Register