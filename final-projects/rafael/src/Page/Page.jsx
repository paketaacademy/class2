import React, { useState } from "react"
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

  const handleClick = () => {
    if (nameUser) {      
      setParam(nameUser)
      setParamNull('')
      dataLoading()
    } else {
      setParamNull('Enter a name to perform the search!')
    }
  }

  const dataLoading = () => {
    setLoading(true)
    fetch(
      `https://api.github.com/users/${param}`,
      {
        method: 'get',
        // headers: {
        //   'User-Agent': `${param}`
        //   // Authorization: `${param}`
        // }       
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

  const conditionView = () => {
    if (detailUser && detailUser.name != null) {
      return (
        <>
          {viewerUser()}
        </>
      )
    } else if (detailUser && detailUser.message !== '') {
      return (
        <MessageApi>{detailUser.message}</MessageApi>
      )
    } else {
      return (
        <span></span>
      )
    }
  }

  const viewerUser = () => {
    return (
      <Box>
        <div>
          <AvatarUser name={detailUser.name} url={detailUser.avatar_url} />
        </div>
        <div>
          <Detailsuser name={detailUser.name} user={detailUser.login} created={detailUser.created_at} />
          <InfoUser info={detailUser.bio} />
          <Socialuser repos={detailUser.public_repos} followers={detailUser.followers} following={detailUser.following} />
          <LinksUser city={detailUser.location} twitter={detailUser.twitter_username} gitHub={detailUser.html_url} workplace={detailUser.company} />
        </div>
      </Box>
    )
  }

  console.log('param', param)
  return (
    <PageContainer>
      <Menu />
      <SearchBox component="form">
        <IconBox aria-label="search">
          <SearchIcon />
        </IconBox>
        <SearchUser
          placeholder="Search GitHub username..."
          inputProps={{ 'aria-label': 'Search GitHub username...' }}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleClick} >
          Search
        </Button>
      </SearchBox>
      <MessageNull>{paramNull}</MessageNull>
      {loading ? 'Loading...' : conditionView()}
    </PageContainer>
  )
}

export default Page
