

import { useState } from 'react';
import './TaskCalendar.css'
import TaskCalendarMark from './TaskCalendarMark/TaskCalendarMark';

const TaskCalendar = (props) => {
    const [filterItemId, setFilterItemId] = useState(null);
    const [filterSdlId, setFilterSdlId] = useState(null);

    const label = props.membersLabel ? props.membersLabel : 'Equipe/Dias/Tarefas';
    const teamMembers = props.members ? props.members : [];
    const tasks = props.tasks ? props.tasks : [];
    const schedules = props.schedules ? props.schedules : [];
    const mode = props.mode ? props.mode : 1;
    const editable = props.editable && props.editable === true;

    const getSchedulesCols = () => {
        let itens = teamMembers;

        if(mode === 1)
            itens = tasks;

        let t = [];

        if(filterItemId && filterItemId !== null){
            // eslint-disable-next-line
            itens = itens.filter(tm => filterItemId == tm.id);
        }

        itens.forEach((tm) => {
            t.push(
                <td key={`${tm.id}_${tm.name}_${new Date().getTime()}`} 
                        className='task-calendar-tasks-desc'>
                    {`${tm.name}`}
                </td>
            );
        });

        return t;
    }

    const getSchedulesOne = () => {
        let s = [];

        let itens = schedules;

        if(filterSdlId && filterSdlId !== null){
            // eslint-disable-next-line 
            itens = itens.filter(sc => filterSdlId == sc.id);
        }

        itens.forEach((sdls) => {
            let rows = [];

            teamMembers.forEach(m => {
                let slots = [];

                let cols = tasks;

                if(filterItemId && filterItemId !== null){
                    // eslint-disable-next-line
                    cols = cols.filter(tm => filterItemId == tm.id);
                }

                cols.forEach(t => {
                    let mark = false;

                    if(sdls.tasks){
                        let matchItens = sdls.tasks.filter(st => t.id === st.tId && m.id === st.mId);

                        mark = matchItens && matchItens.length > 0;
                    }

                    slots.push(<TaskCalendarMark selectable={editable} taskId={t.id} memberId={m.id} selected={mark} />);
                });

                rows.push(
                    <tr className='task-calendar-tasks-marks-row'>
                        {slots.map(sl => sl)}
                    </tr>
                );
            });

            s.push(
                <div className='col-2 task-calendar-day-col'>
                <b>{formatScheduleTitle(sdls)}</b>
                <table>
                    <tbody>
                        <tr className='task-calendar-trow'>
                            {getSchedulesCols().map(t => t)}
                        </tr>
                        {rows.map(r => r)}
                    </tbody>
                </table>
            </div>
            );
        });

        return s;
    }

    const getSchedulesTwo = () => {
        let s = [];

        let itens = schedules;

        if(filterSdlId && filterSdlId !== null){
            // eslint-disable-next-line
            itens = itens.filter(sc => filterSdlId == sc.id);
        }

        itens.forEach((sdls) => {
            let rows = [];

            tasks.forEach(t => {
                let slots = [];

                let cols = teamMembers;

                if(filterItemId && filterItemId !== null){
                    // eslint-disable-next-line
                    cols = cols.filter(tm => filterItemId == tm.id);
                }

                cols.forEach(m => {
                    let mark = false;

                    if(sdls.tasks){
                        let matchItens = sdls.tasks.filter(st => t.id === st.tId && m.id === st.mId);

                        mark = matchItens && matchItens.length > 0;
                    }

                    slots.push(<TaskCalendarMark selectable={editable} taskId={t.id} memberId={m.id} selected={mark} />);
                });

                rows.push(
                    <tr className='task-calendar-tasks-marks-row'>
                        {slots.map(sl => sl)}
                    </tr>
                );
            });

            s.push(
                <div className='col-1 task-calendar-day-col'>
                    <b>{formatScheduleTitle(sdls)}</b>
                    <table>
                        <tbody>
                            <tr className='task-calendar-trow'>
                                {getSchedulesCols().map(t => t)}
                            </tr>
                            {rows.map(r => r)}
                        </tbody>
                    </table>
                </div>
            );
        });

        return s;
    }

    const formatScheduleTitle = (schedule) => {
        return `${schedule.wDay} (${schedule.day}/${schedule.month})`;
    }

    const getLeftCol = () => {
        let itens = tasks;

        if(mode === 1)
            itens = teamMembers;

        let m = [];

        itens.forEach((tm) => {
            m.push(
                <div key={`${tm.id}_${tm.name}`} className='row'>
                    <div className='col task-calendar-tmname'>
                        {`#${tm.id}: ${tm.name}`}
                    </div>
                </div>
            );
        });

        return m;
    }

    const getSchedules = () => {
        if(mode === 1){
            return getSchedulesOne();
        } else {
            return getSchedulesTwo();
        }
    }

    const getFilterOptions = () => {
        let itens = teamMembers;

        if(mode === 1)
            itens = tasks;

        let options = [];

        itens.forEach(i => options.push(<option value={i.id}>{i.name}</option>));

        return options;
    }

    const getSchedulesOptions = () => {
        let options = [];

        schedules.forEach(i => options.push(<option value={i.id}>{formatScheduleTitle(i)}</option>));

        return options;
    }

    return (
        <div className='task-calendar-wrap'>
            <div className='row task-calendar-filters'>
                <div className='col-3 offset-3'>
                    <select class="form-select form-select-sm" 
                            aria-label=".form-select-sm schedule-slct"
                            name="schedule-slct" 
                            id="schedule-slct"
                            onChange={(e) => setFilterSdlId(e.target.value)}>
                        <option value=''>Escolha uma data</option>
                        {getSchedulesOptions().map(f => f)}
                    </select>
                </div>
                <div className='col-3'>
                    <select class="form-select form-select-sm" 
                            aria-label=".form-select-sm task-members-slct"
                            name="task-members-slct" 
                            id="task-members-slct"
                            onChange={(e) => setFilterItemId(e.target.value)}>
                        <option value=''>
                            {mode === 1 ? 'Escolha uma tarefa' : 'Escolha um membro'}
                        </option>
                        {getFilterOptions().map(f => f)}
                    </select>
                </div>
            </div>
            <div className='row task-calendar-title'>
                <div className='col-2'>
                    <div className='row'>
                        <div className='col'>
                            <b>{label}</b>
                        </div>
                    </div>
                    <div className='row task-calendar-trow'>
                        <div className='col'>
                            <b>❤️‍🔥</b>
                        </div>
                    </div>
                    {getLeftCol().map(m => m)}
                </div>
                <div className='col-10 task-calendar-days-col'>
                    <div className='row'> 
                        {getSchedules().map(s => s)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskCalendar;