import EventList from '../../../../components/EventList/EventList'
import Divider from '../../../../components/Divider/Divider'
import './ThirdHPSection.css'

const ThirdHPSection = () => {
    return (
        <div className="section row hp-content-section3">
            <Divider style={{color: 'rgb(50,50,50)'}}/>

            <div className="section1-title">
                PRÓXIMOS EVENTOS
            </div>

            <EventList />

            <legend>Hey! Quer sabe mais? Entre em contato ou se inscreva na página de eventos!</legend>
        </div>
    );
}

export default ThirdHPSection;