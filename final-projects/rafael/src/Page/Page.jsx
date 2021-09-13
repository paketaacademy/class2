import React, { useState, useEffect } from "react"
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import { PageContainer, Box, SearchUser, SearchBox, IconBox, MessageNull, MessageApi } from "./style"
import Menu from "../Components/Menu/Menu"
import AvatarUser from '../Components/DetailsUser/AvatarUser'
import LinksUser from "../Components/DetailsUser/LinksUser"
import Socialuser from "../Components/DetailsUser/SocialUser"
import InfoUser from "../Components/DetailsUser/InfoUser"
import Detailsuser from "../Components/DetailsUser/DetailsUser"

function Page() {

  const [detailUser, setDetailUser] = useState([])
  const [nameUser, setNameUser] = useState('')
  const [param, setParam] = useState('')
  const [paramNull, setParamNull] = useState()
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setNameUser(e.target.value)
  }

  useEffect(() => {
    setParam(nameUser)
  }, [nameUser])

  const handleClick = (e) => {
    e.preventDefault();
    if (param) {      
      setParamNull('')
      dataLoading() 
      document.querySelector('#content').value = ''     
      setNameUser('')
    } else {      
      setParamNull('Enter a name to perform the search!')      
    }
  }

  const dataLoading = () => {
    setLoading(true)
    fetch(
      `https://api.github.com/users/${param}`,
      {
        method: 'get'   
      }
    )
      .then(async response => {
        const data = await response.json()
        setDetailUser(data)
        setLoading(false)        
      })
      .catch(err => {
        setDetailUser(err.message)
      })
  }

  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
  let dateReceived = new Date(detailUser.created_at);
  let formattedDate = ((dateReceived.getDate() + " " + months[(dateReceived.getMonth())] + " " + dateReceived.getFullYear()));
  
  const conditionView = () => {
    if(paramNull){
      return(
        <>
          {searchNull()}
        </>
      )
    }
    else if (detailUser && detailUser.html_url != null) {
      return (
        <>
          {viewerUser()}
        </>
      )
    } else if (detailUser && detailUser.message !== '') {
      return (
        <>
          {viewerMessage()}
        </>
      )
    } else {
      return (
        <>
          {viewerNull()}
        </>
      )
    }
  }  

  const searchNull = () => {
    return (
      <MessageNull>{paramNull}</MessageNull>
    )
  }

  const viewerNull = () => {
    return (
      <span></span>
    )
  }

  const viewerMessage = () => {
    return (
      <MessageApi>{detailUser.message}</MessageApi>
    )
  }

  const viewerUser = () => {
    return (
      <Box>
        <div>
          <AvatarUser name={detailUser.name} url={detailUser.avatar_url} />
        </div>
        <div>
          <Detailsuser name={detailUser.name} user={detailUser.login} created={formattedDate} />
          <InfoUser info={detailUser.bio} />
          <Socialuser repos={detailUser.public_repos} followers={detailUser.followers} following={detailUser.following} />
          <LinksUser city={detailUser.location} twitter={detailUser.twitter_username} gitHub={detailUser.html_url} workplace={detailUser.company} />
        </div>
      </Box>
    )
  }

  return (
    <PageContainer>
      <Menu />
      <SearchBox component="form" onSubmit={handleClick}>
        <IconBox aria-label="search">
          <SearchIcon />
        </IconBox>
        <SearchUser
          id='content'
          placeholder="Search GitHub username..."
          inputProps={{ 'aria-label': 'Search GitHub username...' }}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit" >
          Search
        </Button>
      </SearchBox>
      {loading ? 'Loading...' : conditionView()}
    </PageContainer>
  )
}

export default Page
