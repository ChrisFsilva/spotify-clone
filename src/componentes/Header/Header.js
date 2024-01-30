import React from "react";
import './Header.css'
import SearchBar from '../SearchBar';
import smallRight from '../../assets/icons/small-right.png'
import smallLeft from '../../assets/icons/small-left.png'

const Header = () =>{
    return(
        <nav className="header_navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="seta esquerda"/>
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="seta direita"/>
                </button>
            </div>
            <SearchBar/>
            {/* <div className="header_search">
                <img src={search} alt=""/>
                <input id="search-input" type="text" maxLength="800" placeholder="o que você quer ouvir?"/>
            </div> */}
            <div className="header_login">
                <button className="subscribe">Inscrava-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header