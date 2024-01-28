import Divider from '../../../../components/Divider/Divider';
import './FirstHPSection.css'

const FirstHPSection = () => {
    return (
        <div className="row section hp-content-section1">
            <div className="col section1-title">
                <i>"Não se embriaguem com vinho,
                    que leva à libertinagem, mas deixem-se encher pelo Espírito."
                    <br/> Efésios 5:18</i>
            </div>

            <Divider />
            
            <div className="row section1-mvv graters">
                <div className="col section1-mvv-child">
                    <h4>MISSÃO</h4>
                    <p>Ser uma <b>igreja</b> fortalecida pelo <b>Espírito Santo</b>, através da adoração, ensinamento das escrituras, oração e dons. <b>Amar o próximo e cumprir o "ide"</b>.</p>
                </div>
                <div className="col section1-mvv-child">
                    <h4>VISÃO</h4>
                    <p><b>Efésios 5:18</b> nos diz para sermos cheios do <b> Espírito Santo</b>.</p>
                </div>
                <div className="col section1-mvv-child">
                    <h4>VALORES</h4>
                    <p>Crer nos princípios da <b>escritura</b> como <b> única e verdadeira</b>.</p>
                </div>
            </div>

            <div className="section1-mvv mobile">
                <div className='row'>
                    <div className="col section1-mvv-child">
                        <h5>MISSÃO</h5>
                        <p>Ser uma <b>igreja</b> fortalecida pelo <b>Espírito Santo</b>, através da adoração, ensinamento das escrituras, oração e dons. <b>Amar o próximo e cumprir o "ide"</b>.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col section1-mvv-child">
                        <h5>VISÃO</h5>
                        <p><b>Efésios 5:18</b> nos diz para sermos cheios do <b> Espírito Santo</b>.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col section1-mvv-child">
                        <h5>VALORES</h5>
                        <p>Crer nos princípios da <b>escritura</b> como <b>única e verdadeira</b>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstHPSection;