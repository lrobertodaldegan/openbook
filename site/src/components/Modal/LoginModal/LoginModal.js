import { useState } from 'react';
import SecondaryButton from '../../SecondaryButton/SecondaryButton';
import Modal from '../Modal';
import './LoginModal.css'

const LoginModal = (props) => {
    const [user, setUser] = useState('team');
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");

    const checkCredentials = () => {
        let result = {
            jwt:null,
            success:false,
            status:403,
            reason:'Acesso negado!'
        };
        
        if(user && user !== null && pass && pass !== null && pass.length > 0){
            //TODO chamar api pra autenticar usuário
            result.success = true;
            result.status = 200;
            result.user = 'xpto';
            result.superuser = true;//TODO adicionar validação em api específica
            result.reason = 'Ok!'
        } else {
            setMsg(`Deu pra fazer o login não. Os dados estão corretos?`);
        }

        if(props.callbackAction)
            props.callbackAction(result);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        checkCredentials();
    }

    const getMessage = () => {
        if(msg && msg.length > 0)
            return <legend>{msg}</legend>;
        
        return <></>;
    }

    return (
        <Modal show={true} hideCloseBtn={true} content={
            <form onSubmit={submitHandler} className="login-form">
                <div className='row'>
                    <div className='col-6 offset-3'>
                        {getMessage()}
                    </div>
                </div>
                <div className="form-group row">
                    <div className='col-6 offset-3'>
                        <label htmlFor="user">Usuário</label>
                        <input type="text" 
                                className="form-control" 
                                id="user" 
                                placeholder="Informe seu usuário"
                                value={user}
                                onChange={(event) => setUser(event.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className='col-6 offset-3'>
                        <label htmlFor="passwd">Password</label>
                        <input type="password" 
                                className="form-control" 
                                id="passwd" 
                                placeholder="Informe a sua senha"
                                value={pass}
                                onChange={(event) => setPass(event.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className='col-6 offset-3 login-form-btn-wrap'>
                        <SecondaryButton label="Entrar"/>
                    </div>
                </div>
            </form>
        }/>
    );
}

export default LoginModal;