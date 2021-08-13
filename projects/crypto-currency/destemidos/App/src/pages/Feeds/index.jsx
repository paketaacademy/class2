import React from "react"
import { useState } from "react"
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Posts from "../../components/Feeds/Posts"
import PostsFull from "../../components/Feeds/PostsFull"
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import ViewStreamIcon from '@material-ui/icons/ViewStream'
import './Styles.css'
import Destemidos from '../../components/Destemidos'

function Feeds() {
  const [component, setComponent] = useState('PostsFull')
  const activePostFull = () => setComponent('PostsFull')
  const activePosts = () => setComponent('Posts')

  return (
    <div>
      <div className='SliderTitle'>
        <Destemidos text="Twittis Da Comunidade" />
      </div>
      <div className='SliderView'>
        <ButtonGroup>
          <Button onClick={activePostFull}><ViewModuleIcon /></Button>
          <Button onClick={activePosts}><ViewStreamIcon /></Button>
        </ButtonGroup>
      </div>

      {component === 'PostsFull' && (<PostsFull />)}
      {component === 'Posts' && (<Posts />)}
    </div>

  )
}

export default Feeds
