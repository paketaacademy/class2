import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import InputCard from './inputCard'
import { Root, AddCard } from './style'

export default function InputContainer() {

    const [open, setOpen] = useState(false)
    
    return(
        <Root>
            <Collapse in={open}>
                <InputCard />
            </Collapse>
            <Collapse in={!open}>
                <InputCard />
                <AddCard 
                elevation={0} 
                onClick={() => setOpen(!open)}>
                    <Typography> + Add Card </Typography>
                </AddCard>
            </Collapse>
        </Root>
    )
}