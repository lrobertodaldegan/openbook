import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMapLocationDot
} from '@fortawesome/free-solid-svg-icons'
import './SecondHPSection.css'

const SecondHPSection = () => {
    return (
        <div className="section hp-content-section2">
            <div className="row">
                <div className="col section1-title">
                    VEM COM A GENTE!
                </div>
            </div>

            <div className="row semana graters">
                <div className="col dia-semana">
                    <h5>DOMINGO</h5>
                    <p><b>Culto</b><br/>18hrs</p>
                </div>
                <div className="col dia-semana">
                    <h5>SEGUNDA</h5>
                    <p><b>Ação House</b><br/>S. José dos Pinhais<br/>20hrs*</p><br/>
                    <p><b>Ação House</b><br/>Boa Vista<br/>20hrs*</p>
                </div>
                <div className="col dia-semana">
                    <h5>TERÇA</h5>
                    <p>-</p>
                </div>
                <div className="col dia-semana">
                    QUARTA
                    <p>-</p>
                </div>
                <div className="col dia-semana">
                    <h5>QUINTA</h5>
                    <p><b>HabitAção (Sala de oração)</b><br/>19:30hrs*</p>
                </div>
                <div className="col dia-semana">
                    SEXTA
                    <p>-</p>
                </div>
                <div className="col dia-semana">
                    <h5>SÁBADO</h5>
                    <p><b>Ação House</b><br/>Jovens<br/>20:00hrs*</p>
                    <p><b>Ação House</b><br/>Meninos e Meninas<br/>16:00hrs*</p>
                </div>
            </div>

            <div className="row semana mobile">
                <div className="col-6 dia-semana">
                    <h5>DOMINGO</h5>
                    <p><b>Culto</b><br/>18hrs</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>SEGUNDA</h5>
                    <p><b>Ação House</b><br/>S. José dos Pinhais<br/>20hrs*</p><br/>
                    <p><b>Ação House</b><br/>Boa Vista<br/>20hrs*</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>TERÇA</h5>
                    <p>-</p>
                </div>
                <div className="col-6 dia-semana">
                    QUARTA
                    <p>-</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>QUINTA</h5>
                    <p><b>HabitAção (Sala de oração)</b><br/>19:30hrs*</p>
                </div>
                <div className="col-6 dia-semana">
                    SEXTA
                    <p>-</p>
                </div>
                <div className="col-6 dia-semana">
                    <h5>SÁBADO</h5>
                    <p><b>Ação House</b><br/>Jovens<br/>20:00hrs*</p>
                    <p><b>Ação House</b><br/>Meninos e Meninas<br/>16:00hrs*</p>
                </div>
            </div>
            
            <legend>*Hey! Quer sabe mais? Entre em contato!</legend>

            <div className="section2-map">
                <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Igreja+A%C3%A7%C3%A3o+do+Esp%C3%ADrito/@-25.3872343,-49.2422352,15z/data=!4m2!3m1!1s0x0:0x6351df6f1ec915b3?sa=X&ved=2ahUKEwio0-WA8or9AhWZr5UCHWosCj8Q_BJ6BAhaEAg">
                    <FontAwesomeIcon icon={faMapLocationDot} 
                                    size='3x'
                                    className='section2-map-icon'/><br/>
                    Rua Nossa Senhora de Nazaré, 1662 - Boa Vista, Curitiba - PR
                </a>
            </div>
        </div>
    );
}

export default SecondHPSection;