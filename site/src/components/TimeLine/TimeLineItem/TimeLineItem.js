import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const TimeLineItem = (props) => {
    const [showLegend, setShowLegend] = useState(false);

    const open = (link) => {
        if(link)
            window.open(link, '_blank').focus();
    }

    const getLegend = () => {
        if(!props.hideLegend){
            return (
                <legend className='timeline-legend' 
                        style={{opacity: showLegend ? 1 : 0}}>
                    Inscreva-se!
                </legend>
            );
        } else {
            return <></>;
        }
    }

    const getIcon = () => {
        if(!props.hideIcon){
            if(evt.icon)
                return <FontAwesomeIcon key={`${index}-ico`} icon={evt.icon} />
            else
                return <FontAwesomeIcon key={`${index}-ico`} icon={faCalendarCheck} />
        } else {
            return <></>
        }
    }

    let index = props.index;
    let evt   = props.evt;

    return (
        <div key={`${index}-col`} 
                onClick={() => open(evt.link)}
                onMouseOut={() => setShowLegend(false)} 
                onMouseOver={()=> setShowLegend(true)}
                className={(index % 2) === 0 
                            ? 'col-6 timeline timeline-l'
                            : 'col-6 offset-6 timeline timeline-r'}>

            <div key={`${index}-ctt`} className='timeline-content'>
                <div key={`${index}-h`} className='timeline-header'>
                    
                    {getIcon()}

                    <legend key={`${index}-leg`}>
                        {evt.date}
                    </legend>
                </div>

                <h3 key={`${index}-h3`}>
                    {evt.title}
                </h3>
                <p key={`${index}-p`}>
                    {evt.desc}
                </p>
                {getLegend()}
            </div>
        </div>
    );
}

export default TimeLineItem;