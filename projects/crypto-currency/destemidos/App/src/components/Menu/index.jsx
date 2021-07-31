import React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/entrar">Acessar</Link>
                </li>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/mercado">Mercado</Link>
                </li>
                <li>
                    <Link to="/influenciadores">Influenciadores</Link>
                </li>
                <li>
                    <Link to="/feeds">Feeds</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
