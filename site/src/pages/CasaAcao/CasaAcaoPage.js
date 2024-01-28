import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faChurch,
    faPersonDigging,
    faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/img/casa_acao_logo022021_edited.png'
import qrcode from '../../assets/img/qrcode_pix_casaacao.png'
import Divider from '../../components/Divider/Divider'
import './CasaAcaoPage.css'
import { useEffect } from 'react'

const CasaAcaoPage = () => { 
    useEffect(() => {
        document.getElementById('main-menu').style = "background:rgb(180,180,180);";
        document.getElementById('c-a-logo').style = "opacity:1"
    }, []);
    return (
        <div className="casaacao-page-content">
            <div className="section row">
                <div className="casaacao-logo-top col" id="c-a-logo">
                    <img src={logo} alt="Casa Ação"/>
                </div>
            </div>

            <div className="section row">
                <div className="casaacao-whois col">
                    <h3>O QUE É 'CASA AÇÃO'?</h3>

                    <p>
                        Somos uma república que, além de <b>abrigar jovens </b> 
                         oriundos de <b>casas lares</b>, fornece 
                         <b> suporte profissional</b>, 
                         <b> emocional</b> e <b>espiritual</b> para seu 
                         <b> desenvolvimento</b>.
                    </p>
                    <p>
                        <b>CASA</b> significa <b>C</b>omunidade de 
                        <b> A</b>linhamento <b>S</b>ocial e <b>A</b>vivamento.
                    </p>
                    <p>
                        Entendemos que quando o <b>evangelho</b> chega, 
                        ele é capaz de <b>transformar</b> o local onde chegou. 
                        Que seja assim dentro dessa <b>casa</b>, uma 
                        <b> família</b> para esses <b>jovens</b>, mas uma 
                        <b> mudança</b> na <b>realidade social</b>.
                    </p>
                </div>
            </div>

            <Divider style={{color:'#810000'}} />

            <div className="section row">
                <div className="casaacao-pillars col">
                    <h3>NOSSOS PILARES</h3>

                    <div className="casaacao_pillars_icons row">
                        <div className="casaacao_pillars_icon col">
                            <FontAwesomeIcon icon={faPersonDigging} 
                                                size="4x"/>
                            <legend>Trabalho</legend>
                        </div>
                        <div className="casaacao_pillars_icon col">
                            <FontAwesomeIcon icon={faChurch} 
                                                size="4x"/>
                            <legend>Fé</legend>
                        </div>
                        <div className="casaacao_pillars_icon col">
                            <FontAwesomeIcon icon={faGraduationCap} 
                                                size="4x"/>
                            <legend>Educação</legend>
                        </div>
                    </div>

                    <p>
                        Além de <b>proporcionar</b> um ambiente de 
                        <b> acolhimento</b> para esses <b>jovens</b>, 
                        entendemos que a <b>fé</b> é <b>essencial </b> 
                        para tratarmos a <b>espiritualidade</b>, 
                        amar a <b>Deus</b> acima de tudo e amar ao  
                        <b> próximo</b> assim como <b>Jesus</b> nos ensinou. 
                        Através de <b>cultos</b>, participação de <b>cursos </b> 
                        e rodas de <b>conversas</b> vamos intruir esses  
                        <b> jovens</b> a <b>viver</b> com <b>fé </b> 
                        desenvolvida em <b>Jesus</b>.
                    </p>
                    <p>
                        Com isso o nosso <b>próximo passo</b> também é 
                        <b> desenvolver</b> esse <b>jovem</b> de forma 
                        <b> integral, estudos</b> e <b>trabalho</b>, 
                        sendo ele o <b>trabalho</b> formal ou  
                        <b> empreendedorismo social</b>. 
                    </p>
                    <p>
                        A <b>república</b> conta com o <b>suporte</b> 
                        de <b>missionários integrais, assistentes sociais,  
                        psicólogos</b> e <b>parceria</b> com diversas áreas que  
                        <b> colaborem</b> para o <b>desenvolvimento</b> desse 
                        <b> jovem</b> de forma <b>íntegra</b>. 
                    </p>
                    <p>
                        Deseja fazer parte dessa história? Entre em contato!
                    </p>
                </div>
            </div>

            <div className="section">
                <div className="casaacao-card graters">
                    <div className="casaacao-card-qrcode">
                        <img src={qrcode} alt="qrcode" />
                    </div>
                    <div className="casaacao-card-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="casaacao-card-info">
                        <p>
                            <a rel="noreferrer" 
                                target="_blank" 
                                href="https://www.instagram.com/casa_acao">
                                    @casa_acao
                                </a>
                            <br/>
                            CNPJ: 46.153.944/001-08<br/><br/>
                            contato@acaodoespirito.com.br<br/><br/>
                            Rua Engenheiro Luiz Augusto Leão Fonseca, 491<br/> 
                            Santa Cândida, Curitiba/PR - CEP: 8640-370<br/><br/>
                        </p>
                    </div>
                </div>
                <div className="casaacao-card row mobile">
                    <div className='col'>
                        <div className='row' style={{textAlign:'center'}}>
                            <div className="casaacao-card-qrcode col">
                                <img src={qrcode} alt="qrcode" />
                            </div>
                            <div className="casaacao-card-logo col">
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="casaacao-card-info col">
                                <p>
                                    <a rel="noreferrer" 
                                        target="_blank" 
                                        href="https://www.instagram.com/casa_acao">
                                            @casa_acao
                                        </a>
                                    <br/>
                                    CNPJ: 46.153.944/001-08<br/><br/>
                                    contato@acaodoespirito.com.br<br/><br/>
                                    Rua Engenheiro Luiz Augusto Leão Fonseca, 491<br/> 
                                    Santa Cândida, Curitiba/PR - CEP: 8640-370<br/><br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <legend>
                    Para doações, abra o aplicativo de seu banco
                    e escaneie o <i>qrcode</i> acima ou informe o nosso CNPJ.
                </legend>
            </div>
        </div>
    );
}

export default CasaAcaoPage;