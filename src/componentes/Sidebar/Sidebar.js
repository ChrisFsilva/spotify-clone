import './vars.css';
import './Sidebar.css';
import Logo from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <nav className="sidebar_navigation">
                <div className="logo">
                    <a href="">
                        <img src={Logo} alt="Logo"/>
                    </a>
                </div>
                <ul>
                    <li className="button">
                        <a href=""/>
                            <span><FontAwesomeIcon icon={faHome}/></span>
                            <span>início</span>
                    </li>
                    <li className="button">
                        <a href=""/>
                            <span><FontAwesomeIcon icon={faSearch} /></span>
                            <span>Buscar</span>
                    </li>
                </ul>
            </nav>
            <div className="library">
                <div className="library_content">
                    <button className="library_button">
                    <span><FontAwesomeIcon icon={faBook} /></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <span className="fa fa-plus"></span>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist_content">
                    <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist_button">
                            <span>Criar Playlist</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <a href="">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages_button">
                        <span><FontAwesomeIcon icon={faGlobe}/></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Sidebar