import React, { useState, useEffect } from 'react'
import { useParams } from "react-router"
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import { getToken } from '../../Services/auth.js'
import { ContainerTitle, Details, BoxModal, BoxModalOn, UserItem, AvatarMembers, DetailsBtn } from './style.js'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import AddMembers from './AddMembers.jsx'
import RemoveMembers from './RemoveMembers.jsx'

const DetailsBoard = () => {

  let { id } = useParams()
  const API = process.env.REACT_APP_API_URL

  const [members, setMembers] = useState([])
  const [boards, setBoards] = useState([])
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    fetch(
      `${API}/board/${id}/members`,
      {
        method: 'get',
        headers: new Headers({
          'auth-superman': getToken(),
        })
      },
    )
      .then(async response => {
        const data = await response.json()
        setMembers(data)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch(
      `${API}/board`,
      {
        method: 'get',
        headers: new Headers({
          'auth-superman': getToken(),
        })
      },
    )
      .then(async response => {
        const data = await response.json()
        data.filter(content => {
          if (content._id == id) {

            setBoards({
              idBoard: content._id,
              title: content.title,
              members: content.members,
            })
          }
        })
      })
      .catch(error => console.log(error))
  }, [API, setBoards])

  const Members = () => {
    return (
      <AvatarGroup max={3}>
        {members != null && members.map((row) => {
          return (
            <Avatar />
          )
        })}
      </AvatarGroup>
    )
  }

  const MembersName = () => {
    return (
      <div>
        {members != null && members.map((row) => {
          return (
            <UserItem >
              <Avatar />
              <div>{row.name}</div>
            </UserItem >
          )
        })}
      </div>
    )
  }

  return (
    <ContainerTitle>
      <Details>{boards.title}</Details>
      <Details>
        <DetailsBtn>
          <AvatarMembers onClick={handleOpen}>
            {Members()}
          </AvatarMembers>
        </DetailsBtn>
        <DetailsBtn>
          <AddMembers />
        </DetailsBtn>
        <DetailsBtn>
          <RemoveMembers />
        </DetailsBtn>
      </Details>
      <BoxModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <BoxModalOn>
            {MembersName()}
          </BoxModalOn>
        </Fade>
      </BoxModal>
    </ContainerTitle>
  )
}

export default DetailsBoard