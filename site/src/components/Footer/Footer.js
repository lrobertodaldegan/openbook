import logoIgreja from '../../assets/img/logo_igreja.png'
import qrcode from '../../assets/img/qrcode_pix_casaacao.png'
import SocialIcons from '../SocialIcons/SocialIcons'

const Footer = () => {

  const getDateTime = () => {
    let d = new Date();
    let m = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    let mm = d.getMonth() + 1;
    mm = mm < 10 ? `0${mm}` : mm;

    return `${d.getDate()}/${mm}/${d.getFullYear()} ${d.getHours()}:${m}`;
  }

  return (
    <div className="footer">
      <div className='row'>
        <div className="col">
            <img src={logoIgreja} alt="Ação do Espírito" 
                className="main-menu-logo"/>
            
            <SocialIcons />
        </div>
      </div>
      <div className="row">
          <div className="col">
              <h4>Outras informações</h4>
              <p>
                  E-mail: contato@acaodoespirito.com.br
                  <br/>
                  CNPJ: 46.153.944/0001-08
              </p>
          </div>
      </div>
      <div className="row">
        <div className="col">
            <small>Escaneie o qrcode abaixo para doações ou ofertas</small>
            <br/><br/>
            <img src={qrcode} className='qrCode' alt="PIX_QRCODE"/>
        </div>
      </div>
      <div className="row">
        <div className="col">
            <small>
              <br/>
                ❤️‍🔥
                <br/>
                Deus te abençoe e que você seja cheio do Espírito Santo!
                <br/>
                {getDateTime()}
            </small>
          </div>
        </div>
    </div>
  );
}

export default Footer;