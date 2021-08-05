import React from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import TwitterIcon from '@material-ui/icons/Twitter'
import { ContainerRoot, PaperDiv,TypographyDiv } from './style.js'

const PostCard = ({body, social_score, retweets, likes}) => {

  return (
    <ContainerRoot >
      <PaperDiv>        
        <Grid container wrap="nowrap" spacing={2}>         
            <Grid item>
                <Avatar><TwitterIcon/></Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap><h2>{body}</h2></Typography>
                <Typography noWrap><TypographyDiv><div>Social Score: {social_score}</div> <div>Retweets: {retweets}</div> <div>Likes: {likes}</div></TypographyDiv></Typography>
              </Grid>                  
          </Grid>        
      </PaperDiv>
    </ContainerRoot>
  )
}

export default PostCard
