import logo from '../../assets/img/logo.png'
import qrcode from '../../assets/img/qrcode_pix_casaacao.png'
import './Footer.css'
import SocialIcons from '../SocialIcons/SocialIcons'

const Footer = () => {

    const getDateTime = () => {
        let d = new Date();
        let m = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();

        return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} ${d.getHours()}:${m}`;
    }

    return (
        <div className="hp-content-footer row">
            <div className="footer-head col">
                <img src={logo} alt="Ação do Espírito" className="main-menu-logo"/>
                
                <SocialIcons />
            </div>
            <div className="footer-infos row">
                <div className="footer-infos-desc col">
                    <h3>Outras Informações</h3>
                    <p>
                        CNPJ:<br/>46.153.944/0001-08
                    </p>
                    <p>
                        E-mail:<br/>contato@acaodoespirito.com.br
                    </p>
                    <p>
                        Endereço:<br/>Rua Nossa Senhora de Nazaré, 1662 - Boa Vista, Curitiba/PR - CEP 82640-370
                    </p>
                </div>
                <div className="footer-infos-offer col">
                    <h3>Doações e Ofertas</h3>
                    <img src={qrcode} alt="PIX_QRCODE"/>
                </div>
            </div>
            <small>
                ❤️‍🔥
                <br/>
                Deus te abençoe e que você seja cheio do Espírito Santo!
                <br/>
                {getDateTime()}
            </small>
        </div>
    );
}

export default Footer;