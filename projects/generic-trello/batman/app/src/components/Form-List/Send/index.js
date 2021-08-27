import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'
import { SubmitButtonList } from './style'

const SendNewList = (props) =>{
    const handleClick=()=>{

    }

    return(
        <>
            <SubmitButtonList
                variant="contained"
                size="small"
                startIcon={<SaveIcon />}
                type={props.type}
                onClick={handleClick}
            >
                Save
            </SubmitButtonList>
        </>
    )
}

export default SendNewList