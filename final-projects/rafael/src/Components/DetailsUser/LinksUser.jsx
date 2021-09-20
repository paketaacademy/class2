import React from "react"
import LocationOnIcon from '@material-ui/icons/LocationOn'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkIcon from '@material-ui/icons/Link'
import HomeWorkIcon from '@material-ui/icons/HomeWork'
import { BoxDetails, ColumnDetails, DetailRow, LinkGit, InfoRow } from './StyleLinksUser.js'

const LinksUser = ({ city, twitter, gitHub, workplace }) => {
  return (
    <BoxDetails>
      <DetailRow>
        <ColumnDetails>
          <LocationOnIcon />
          <InfoRow>{city ? city : 'Not Available'}</InfoRow>
        </ColumnDetails>
        <ColumnDetails>
          <TwitterIcon style={{margin: '0px'}}/>
          <InfoRow>{twitter ? twitter : 'Not Available'}</InfoRow>
        </ColumnDetails>
      </DetailRow>
      <DetailRow>
        <ColumnDetails>
          <LinkIcon />
          <LinkGit href={gitHub} target="_blank">{gitHub}</LinkGit>
        </ColumnDetails>
        <ColumnDetails>
          <HomeWorkIcon />
          <InfoRow>{workplace ? workplace : 'Not Available'}</InfoRow>
        </ColumnDetails>
      </DetailRow>
    </BoxDetails>
  )
}

export default LinksUser