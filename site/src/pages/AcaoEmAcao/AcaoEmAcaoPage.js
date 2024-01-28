import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faInstagram
} from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/img/logo.png'
import thiago from '../../assets/img/banda/thiago_ae.jpg'
import giu from '../../assets/img/banda/giu_acao_edited.jpg'
import amanda from '../../assets/img/banda/amandaoliveira_ae_edited.jpg'
import fe from '../../assets/img/banda/fe_batera_ae.jpg'
import marcio from '../../assets/img/banda/marcio_guitarra_ae_edited.jpg'
import Divider from '../../components/Divider/Divider'
import './AcaoEmAcaoPage.css'
import { useEffect } from 'react'

const AcaoEmAcaoPage = () => {
    useEffect(() => {
        document.getElementById("acao-em-acao-content").style="color: rgb(250,250,250);background: rgb(0,0,0);";
    }, []);

    return (
        <div id="acao-em-acao-content" className="acao-em-acao-content">
            <div className="section row">
                <div className="col acao-em-acao-main-logo">
                    <img src={logo} alt="Ação do Espírito"/>
                </div>
            </div>
            <div className="section row">
                <div className="col acao-em-acao-desc">
                    <p><b>Ação do Espírito</b> é um <b>ministério</b> voltado para o <b>louvor, adoração e palavra</b> com o intuito de <b>manifestar</b> o poder e a <b>ação de Deus</b>, espalhando a palavra que tem nos tocado e movido nossos <b>corações</b> com paixão e amor <b>por Jesus</b>.</p>
                    <p>Temos como <b>missão</b> primeiro alcançar o coração de Deus através das nossas <b>músicas</b> , e assim fazer com que as pessoas <b>adorem a Deus</b> não apenas como um movimento, mas <b>verdadeiramente</b> numa vida de <b>intimidade</b> com o <b>Espírito Santo</b>.</p>
                </div>
            </div>

            <Divider style={{color:'rgb(50,50,50)'}}/>

            <div className="section">
                <div className="row">
                    <div className="col section1-title">
                        MINISTÉRIO
                    </div>
                </div>
                <div className="row acao-em-acao-members">
                    <div className="col">
                        <img src={thiago} alt="Thiago Simeão"/>
                        <p>Thiago Simeão</p>
                        <legend>Fundador, Violão e Voz</legend>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/thiago_simeao_ae/">
                            <FontAwesomeIcon icon={faInstagram} size='lg'/>
                        </a>
                    </div>
                    <div className="col">
                        <img src={giu} alt="Giu Simeão"/>
                        <p>Giulianna Simeão</p>
                        <legend>Fundadora, ministração</legend>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/giukurzlop/">
                            <FontAwesomeIcon icon={faInstagram} size='lg'/>
                        </a>
                    </div>
                </div>
                <div className="row acao-em-acao-members">
                    <div className="col">
                        <img src={amanda} alt="Amanda"/>
                        <p>Amanda</p>
                        <legend>Voz</legend>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/amanda_oliveira1_/">
                            <FontAwesomeIcon icon={faInstagram} size='lg'/>
                        </a>
                    </div>
                    <div className="col">
                        <img src={fe} alt="Felipe"/>
                        <p>Felipe</p>
                        <legend>Bateria</legend>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fehfonnseca/">
                            <FontAwesomeIcon icon={faInstagram} size='lg'/>
                        </a>
                    </div>
                    <div className="col">
                        <img src={marcio} alt="Márcio"/>
                        <p>Márcio</p>
                        <legend>Guitarra</legend>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/marciocolferai/">
                            <FontAwesomeIcon icon={faInstagram} size='lg'/>
                        </a>
                    </div>
                </div>
            </div>

            <Divider style={{color:'rgb(50,50,50)'}}/>

            <div className="section">
                <div className="row">
                    <div className="col section1-title">
                        CONTATO
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                    <a target="_blank" rel="noreferrer" href="mailto:contato@acaodoespirito.com.br">
                        contato@acaodoespirito.com.br
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AcaoEmAcaoPage;