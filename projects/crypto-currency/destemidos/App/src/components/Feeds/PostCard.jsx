import React from 'react';


const PostCard = ({body, social_score, retweets, likes}) => {
  
  return (
    <div >
        <h2>{body}</h2>
        <p>Social Score: {social_score} Retweets: {retweets} Likes: {likes}</p>
    </div>
  );
};

export default PostCard;
