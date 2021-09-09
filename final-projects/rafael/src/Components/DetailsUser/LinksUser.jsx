import React from "react"
import LocationOnIcon from '@material-ui/icons/LocationOn'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkIcon from '@material-ui/icons/Link'
import HomeWorkIcon from '@material-ui/icons/HomeWork'
import { BoxDetails, ColumnDetails, DetailRow, LinkGit, InfoRow } from './StyleLinksUser.js'

const LinksUser = ({ city, twitter, gitHub, workplace }) => {
  return (
    <BoxDetails>
      <ColumnDetails>
        <DetailRow>
          <LocationOnIcon />
          <InfoRow>{city}</InfoRow>
        </DetailRow>
        <DetailRow>
          <LinkIcon />
          <LinkGit href={gitHub} target="_blank">{gitHub}</LinkGit>
        </DetailRow>
      </ColumnDetails>
      <ColumnDetails>
        <DetailRow>
          <TwitterIcon />
          <InfoRow>{twitter}</InfoRow>
        </DetailRow>
        <DetailRow>
          <HomeWorkIcon />
          <InfoRow>{workplace}</InfoRow>
        </DetailRow>
      </ColumnDetails>
    </BoxDetails>
  )
}

export default LinksUser