import './InscrevasePage.css'
import TimeLine from '../../components/TimeLine/TimeLine';
import { EventsMock } from '../../mocks/EventsMock';

const Inscrevase = () => {
    return (
        <div className='section'>
            <TimeLine events={EventsMock}/>
        </div>
    );
}

export default Inscrevase;