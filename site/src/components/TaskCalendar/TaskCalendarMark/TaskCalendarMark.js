import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCheck
} from '@fortawesome/free-solid-svg-icons';

const TaskCalendarMark = (props) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => setSelected(props.selected && props.selected === true), [props.selected]);

    const clickHandler = () => {
        if(props.selectable && props.selectable === true){
            let taskId = props.taskId;
            let memberId = props.memberId;

            if(selected){
                //remove
            } else {
                //add
            }

            setSelected(!selected);
        }
    }

    return (
        <td className='task-calendar-tasks-mark'
                onClick={() => clickHandler()}>
            {selected && selected === true 
                ? <FontAwesomeIcon icon={faCheck}/>
                : <></>}
        </td>
    );
}

export default TaskCalendarMark;