import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCalendarWeek,
    faCalendarDay,
    faFile,
    faBoxesPacking
} from '@fortawesome/free-solid-svg-icons';

import EventList from '../../components/EventList/EventList';
import LoginModal from '../../components/Modal/LoginModal/LoginModal';
import './EquipePage.css'
import TaskCalendar from '../../components/TaskCalendar/TaskCalendar';
import { TeamMock } from '../../mocks/TeamMock';
import { AcaoHouseMock } from '../../mocks/AcaoHouseMock';
import { OtherContentsMock } from '../../mocks/OtherContentsMock';
import FileUploadButton from '../../components/FileUploadButton/FileUploadButton';

const EquipePage = () => {
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [superUser, setSuperUser] = useState(false);

    useEffect(() => {
        document.getElementsByClassName('main-button')[0].style = "display:none";
    });

    const checkLogin = (result) => {
        setLoginSuccess(result.success && result.success === true);

        setSuperUser(result.superuser && result.superuser === true);
    }

    const openDownloadTab = (file) => {
        window.open(file, '_blank').focus();
    }

    let content = <LoginModal callbackAction={checkLogin}/>

    if(loginSuccess){
        content = (
            <div className='team-content'>
                <div className='team-actions-wrap'>
                    <div className='section row' id='escalas'>
                        <div className='col-10 offset-1'>
                            <h3>Escala Mensal</h3>
                            <TaskCalendar members={TeamMock.members} 
                                    tasks={TeamMock.tasks}
                                    schedules={TeamMock.schedules}
                                    editable={superUser}
                                    mode={2}
                            />
                        
                        </div>
                    </div>
                    <div className='section row' id='eventos'>
                        <div className='col-10 offset-1'>
                            <h3>Próximos Eventos</h3>
                            <EventList />
                        </div>
                    </div>
                    <div className='section row' id='mat-acao-house'>
                        <div className='col-10 offset-1'>
                            <h3>Material Ação House</h3>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Assunto</th>
                                        <th scope="col">Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {AcaoHouseMock.map(ah => {
                                        return (
                                            <tr>
                                                <td>{ah.id}</td>
                                                <td>{ah.name}</td>
                                                <td>
                                                    {/* eslint-disable-next-line */}
                                                    <a href="#" 
                                                        onClick={() => openDownloadTab(ah.content)}>
                                                        {ah.name}
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='section row' id='others'>
                        <div className='col-10 offset-1'>
                            <h3>Aplicativos e documentos diversos</h3>
                            <div className='row'>
                                <div className='col'>
                                    <FileUploadButton />
                                </div>
                            </div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Item</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {OtherContentsMock.map(oc => {
                                        return (
                                            <tr>
                                                <td>{oc.id}</td>
                                                <td>{oc.name}</td>
                                                <td>
                                                    {/* eslint-disable-next-line */}
                                                    <a href="#" 
                                                        onClick={() => openDownloadTab(oc.content)}>
                                                        {oc.name}
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='team-menu-wrap'>
                    <div className='row'>
                        <div className='col team-menu-opt'>
                            <a href="#escalas">
                                <FontAwesomeIcon icon={faCalendarWeek} size='2x'/>
                                <legend>Escalas</legend>
                            </a>
                        </div>
                        <div className='col team-menu-opt'>
                            <a href="#eventos">
                                <FontAwesomeIcon icon={faCalendarDay} size='2x'/>
                                <legend>Próximos eventos</legend>
                            </a>
                        </div>
                        <div className='col team-menu-opt'>
                            <a href="#mat-acao-house">
                                <FontAwesomeIcon icon={faFile} size='2x'/>
                                <legend>Material Ação House</legend>
                            </a>
                        </div>
                        <div className='col team-menu-opt'>
                            <a href="#others">
                                <FontAwesomeIcon icon={faBoxesPacking} size='2x'/>
                                <legend>Apps e outros</legend>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return content;
}

export default EquipePage;