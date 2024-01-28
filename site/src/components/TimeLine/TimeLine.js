
import './TimeLine.css'
import TimeLineItem from './TimeLineItem/TimeLineItem';

const TimeLine = (props) => {
    const events = props.events ? props.events : [];

    return (
        <div className='timeline-wrap'>
            {events.map((evt, index) => (
                <div key={`${index}-row`} className='row'>
                    <TimeLineItem index={index} 
                            evt={evt} 
                            hideIcon={props.hideIcon}
                            hideLegend={props.hideLegend}
                    />
                </div>
            ))}
        </div>
    );
}

export default TimeLine;