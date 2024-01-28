import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import SocialIcons from '../SocialIcons/SocialIcons'
import MainButton from '../MainButton/MainButton.js';
import logo from '../../assets/img/logo.png'
import './MainMenu.css';

const MainMenu = () => {
    const [showOptions, setShowOptions] = useState(false);

    const showHideOptions = () => setShowOptions(!showOptions);

    const urlprefix = 'http://acaodoespirito.com.br:21017';
    const secureUrlprefix = 'https://acaodoespirito.com.br';

    let modalOptions = <></>;
    
    if(showOptions) {
        modalOptions = (
            <div className="menu-options-parent">
                <button className='close-menu-button' onClick={() => showHideOptions()}>
                    <FontAwesomeIcon icon={faXmark} 
                                        size='2x'
                                        className='menu-button-icon'/>
                </button>

                <a href="/">
                    <img src={logo} alt="Ação do Espírito" className="main-menu-logo"/>
                </a>
                
                <div className="menu-options">
                    <ul>
                        <li><a href={`${secureUrlprefix}`}>HOME</a></li>
                        <li>
                            QUEM SOMOS
                            <ul>
                                <li><a href={`${urlprefix}/nossa-historia`}>NOSSA HISTÓRIA</a></li>
                                <li><a href={`${urlprefix}/acao-em-acao`}>AÇÃO EM AÇÃO</a></li>
                                
                                <li><a href={`${urlprefix}/evangelismos`}>EVANGELISMOS</a></li>
                                <li><a href={`${urlprefix}/casa-acao`}>CASA AÇÃO</a></li>
                                <li><a href={`${urlprefix}/videos`}>VÍDEOS</a></li>
                            </ul>
                        </li>
                        <li><a href={`${urlprefix}/livros`}>LIVROS</a></li>
                        
                        <li><a href={`${urlprefix}/quero-fazer-parte`}>QUERO FAZER PARTE</a></li>
                        <li><a href={`${urlprefix}/blank`}>?</a></li>
                    </ul>
                    
                    <SocialIcons size="xl"/>
                </div>
            </div>
        );
    }

    return (
        <div className="main-menu" id="main-menu">

            {modalOptions}

            <div className="menu-actions align-left">
                <button className='menu-button' onClick={() => showHideOptions()}>
                    <FontAwesomeIcon icon={faBars} 
                                        size='xl'
                                        className='menu-button-icon'/>
                </button>
            </div>
            <div className="logo">
                <a href={`${secureUrlprefix}`}>
                    <img src={logo} alt="Ação do Espírito" 
                        className="main-menu-logo"
                        id="main-menu-logo"
                    />
                </a>
            </div>
            <div className="other-actions">
                <MainButton label='Quero fazer parte! ❤️' 
                    action={() => window.open(`${urlprefix}/quero-fazer-parte`, '_self').focus()}/>
            </div>
        </div>
    );
}

export default MainMenu;