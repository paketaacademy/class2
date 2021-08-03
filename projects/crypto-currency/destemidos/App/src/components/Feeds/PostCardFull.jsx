import React from 'react'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import TwitterIcon from '@material-ui/icons/Twitter'
import {CardDiv, CardMediaDiv, StyledAvatar, TypographyDiv} from './Style.js'

const PostCardFull = ({ body, display_name, profile_image, social_score, retweets, likes }) => {

  return (
      <CardDiv>
        <CardHeader
          avatar={
            <StyledAvatar aria-label="recipe">
              <img src={profile_image} alt='avatar' />
            </StyledAvatar>
          }
          action={
            <IconButton aria-label="settings">
              <TwitterIcon />
            </IconButton>
          }
          title={display_name}
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardMediaDiv      
          image='https://placedog.net/640/480?random'
         
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <TypographyDiv><div>Social Score: {social_score}</div> <div>Retweets: {retweets}</div> <div>Likes: {likes}</div></TypographyDiv>
          </Typography>
        </CardContent>
      </CardDiv>
  )
}

export default PostCardFull
