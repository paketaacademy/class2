import React from 'react';


const PostInfluencers = ({banner_image, profile_image, rank, twitter_screen_name, display_name}) => {
  
  return (
    <div >
        <h2>
            {rank}
            <img src={profile_image}></img>
            {twitter_screen_name}
        </h2>
        <h3>{display_name}</h3>
        <img src={banner_image}></img>
    </div>
  );
};

export default PostInfluencers;
