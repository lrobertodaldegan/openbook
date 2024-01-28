import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faYoutube,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'
import './SocialIcons.css'

const SocialIcons = (props) => {
    let size = props.size ? props.size : "2x";
    return (
        <div className='social-icons-wrap' style={{width: '100%'}}>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/acaodoespirito/">
                <FontAwesomeIcon icon={faInstagram} 
                                size={size}
                                className="social-icons"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCIeT9E1XMm4bbwExWNp5GHA">
                <FontAwesomeIcon icon={faYoutube} 
                                size={size}
                                className="social-icons"/>
            </a>
        </div>
    );
}

export default SocialIcons;