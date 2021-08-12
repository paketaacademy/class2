import React from 'react'
import InfluencersCards from './influencersCards'
import './Style/style.css'
import Destemidos from '../../components/Destemidos'


function Influencers() {
    return (
        <div>
            <Destemidos text="Principais Influencers" />
            <InfluencersCards />
        </div>
    )
}

export default Influencers
