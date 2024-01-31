import React from "react";
import logo from '../../assets/img/logo.png';
import Footer from "../../components/Footer/Footer";
import VideoList from "../../components/VideoList/VideoList";
import { logout } from "../../Utils/Rest";

export default function AdminPage({user=null, navHandler=()=>null}) {
  const errorHandler = (e) => {
    console.log(e);

    navHandler(null, '/');
  }

  const handleLogout = () => {
    localStorage.clear();

    logout({}, errorHandler).then(() => navHandler(null, '/'));
  }

  return (
    <div className="home">
      <div className="row">
        <div className="col-1">
          <img src={logo} alt="Escola Open Book" className='logo'/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p style={{marginLeft:10}}>
            Bem-vindo, {user}!
            <a href='#' onClick={handleLogout}> sair</a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1">
          <VideoList navHandler={navHandler}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}