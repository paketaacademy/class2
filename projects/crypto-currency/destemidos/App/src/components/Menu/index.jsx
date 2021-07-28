import React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Influencers">Influencers</Link>
                </li>
                <li>
                    <Link to="/Feeds">Feeds</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
