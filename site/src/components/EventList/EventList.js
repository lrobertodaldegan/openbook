import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
import './EventList.css'
import { EventsMock } from '../../mocks/EventsMock';

const EventList = () => {

    const urlprefix = 'http://acaodoespirito.com.br:21017';

    const redirect = () => window.open(`${urlprefix}/inscreva-se`, '_blank').focus();

    const itens = EventsMock.map((item) => {
        return (
            <div key={item.id} 
                    className="events-wrap row" 
                    onClick={() => redirect()}>

                <div className="events-date col graters">
                    <div className="events-day">
                        {item.day}
                    </div>
                    
                    <div className="events-mon">
                        {item.month}
                    </div>
                </div>
                <div className="events-desc col-10 graters">
                    <p>{item.title}</p>
                    <legend>{item.desc}</legend>
                </div>
                <div className="events-icon col graters">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2x"/>
                </div>

                <div className="events-date col-1 mobile">
                    <div className="events-day">
                        {item.day}
                    </div>
                    
                    <div className="events-mon">
                        {item.month}
                    </div>
                </div>
                <div className="events-desc col-6 mobile">
                    <p>{item.title}</p>
                    <legend>{item.desc}</legend>
                </div>
                <div className="events-icon col-1 mobile">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
            </div> 
        );
    });

    return itens;
}

export default EventList;