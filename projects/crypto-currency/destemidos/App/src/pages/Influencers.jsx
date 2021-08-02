import React from 'react';
import {Link} from 'react-router-dom'
import InfluencersCards from '../components/Influencers/influencersCards';


function Influencers() {
    return (
        <div>
            <Link target={"_blank"} to="./Feeds">Your Link</Link>
            <InfluencersCards />
        </div>
    )
}

export default Influencers;
