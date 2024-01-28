import Divider from '../../components/Divider/Divider'
import './EvangelismosPage.css'
import invasaoLogo from '../../assets/img/logoInvasao_digital_art_x4.jpg'

const EvangelismosPage = () => {
    return (
        <div className="ev-content">
            <div className="section">
                <div className="row">
                    <div className="col-10 offset-1">
                        <div className='section1-title'>

                        <i>"Pois não podemos deixar de falar do que vimos e ouvimos" - Efésios 5:18</i>
                        </div>
                    </div>
                </div>

                <Divider style={{color:'rgb(50,50,50)'}}/>

                <div className="row">
                    <div className="col-8 offset-2 ev-main-desc">
                        <p>Entendemos que <b>precisamos corresponder</b>, através do <b>evangelismo</b>, à tudo aquilo que temos <b>vivido</b> em <b>Jesus</b> e <b>compartilhar</b> essas <b>boas novas</b>.</p>
                    </div>
                </div>
            </div>
            <div className="section row">
                <div className='col ev-main-video'>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/Da8bkV1x30I" title="YT Evangelismo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="section ev-evangelismos">
                <div className='row'>
                    <div className='col section1-title'>
                        EVANGELISMOS    
                    </div>    
                </div>
                <div className='row ev-evangelismos-desc ev-invasao graters'>
                    <div className='col ev-invasao-logo'>
                        <img src={invasaoLogo} alt="Invasão"/>
                    </div> 
                    <div className='col'>
                        <p>
                            <b>VISÃO</b>
                            <br/>
                            Levar o evangelho para todas as escolas e faculdades através de células ministradas pelos estudantes.
                        </p> 
                        <p>
                            <b>VALOR</b>
                            <br/>
                            Não diminuir a mensagem do evangelho, propagar a verdade com todas as forças, e entendendo que este é o tempo de proclamar a mensagem de Jesus.
                        </p>  
                        <p>
                            <b>MISSÃO</b>
                            <br/>
                            Alcançar aqueles que precisam de amor através daquilo que somos.
                        </p>  
                    </div>   
                </div>
                <div className='row ev-evangelismos-desc ev-invasao mobile'>
                    <div className='col-12 ev-invasao-logo'>
                        <img src={invasaoLogo} alt="Invasão"/>
                    </div> 
                    <div className='col-12'>
                        <p>
                            <b>VISÃO</b>
                            <br/>
                            Levar o evangelho para todas as escolas e faculdades através de células ministradas pelos estudantes.
                        </p> 
                        <p>
                            <b>VALOR</b>
                            <br/>
                            Não diminuir a mensagem do evangelho, propagar a verdade com todas as forças, e entendendo que este é o tempo de proclamar a mensagem de Jesus.
                        </p>  
                        <p>
                            <b>MISSÃO</b>
                            <br/>
                            Alcançar aqueles que precisam de amor através daquilo que somos.
                        </p>  
                    </div>   
                </div>
                <div className='row ev-evangelismos-desc ev-zombie graters'>
                    <div className='col'>
                        <h3>ZOMBIE WALK - CURITIBA 2018</h3>
                          
                        <p>
                        O evento, tradicional na cidade, reuniu em 2018 cerca de 30 mil pessoas. Nesta ocasião tivemos a oportunidade de falar do amor de Deus às pessoas e orar por elas, compartilhando as boas novas do evangelho.  
                        </p>  
                    </div>   
                    <div className='col'>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAcaodoEspirito%2Fvideos%2F1893682327371361%2F&show_text=false&width=476&t=0" width="476" height="476" style={{width:'100%', border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" title="fb-evangelismo"></iframe>
                    </div> 
                </div>
                <div className='row ev-evangelismos-desc ev-zombie mobile'>
                    <div className='col-12'>
                        <h3>ZOMBIE WALK - CURITIBA 2018</h3>
                          
                        <p>
                            O evento, tradicional na cidade, reuniu em 2018 cerca de 30 mil pessoas. Nesta ocasião tivemos a oportunidade de falar do amor de Deus às pessoas e orar por elas, compartilhando as boas novas do evangelho.  
                        </p>  
                    </div>   
                    <div className='col-12'>
                        <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAcaodoEspirito%2Fvideos%2F1893682327371361%2F&show_text=false&width=476&t=0" width="476" height="476" style={{width:'100%', border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" title="fb-evangelismo"></iframe>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default EvangelismosPage;