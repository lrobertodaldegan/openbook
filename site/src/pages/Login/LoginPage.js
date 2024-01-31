import React, {useState} from "react";
import logo from '../../assets/img/logo.png';
import Footer from "../../components/Footer/Footer";
import { login, KEY } from "../../Utils/Rest";

export default function LoginPage({navHandler=()=>{}}){
  const [user, setUser] = useState();
  const [code, setCode] = useState();
  const [btnLogin, setBtnLbl] = useState('Entrar');

  const handleLogin = (event) => {
    event.preventDefault();

    localStorage.clear();

    login({user: user, password: code}).then((response) => {
      if(response.status === 200){
        localStorage.setItem(KEY, response.data.token);

        navHandler(user, user === 'admin' ? 'admin' : 'app');
      } else {
        setBtnLbl('Tente novamente!');
      }
    })
    .catch(err => {console.log(err); setBtnLbl('Tente novamente!');});
  }

  return(
    <div className="loginPage">
      <div className="row">
        <div className="col center">
          <img src={logo} alt="Escola Open Book" className='logo'/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form onSubmit={e => handleLogin(e)}>
            <div className="form-group">
                <input type='text' className="form-control"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Informe o seu usuário"/>
            </div>
            <div className="form-group">
                <input type='password' className="form-control"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Informe o código de acesso"/>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-dark" 
                  value={btnLogin}/>
            </div>
          </form>
        </div>
      </div>

      <Footer/>
    </div>
  );
}