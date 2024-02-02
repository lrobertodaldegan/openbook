import React, {useState, useEffect} from "react";
import logo from '../../assets/img/logo.png';
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import { getVideos, logout } from "../../Utils/Rest";

export default function AppPage({user=null, navHandler=()=>null}) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();

  const errorHandler = (e) => {
    console.log(e);

    localStorage.clear();

    navHandler(null, '/');
  }

  const doDownload = (fileRef) => {
    var win = window.open();
    win.document.write(`<iframe src='${fileRef}' />`);
  }

  useEffect(() => {
    setLoading(true);

    getVideos(errorHandler).then(rs => {
      if(rs.status === 200 && rs.data !== null){
        if(rs.data.videos && rs.data.videos.length > 0){
          let vs = [];
    
          for(let i=0; i< rs.data.videos.length; i++){
            let v = rs.data.videos[i];

            let materialLink = <></>;

            if(v.filePath && v.filePath !== null){
              if(v.filePath.includes('.rar') 
                  || v.filePath.includes('-zip') 
                  || v.filePath.includes('compressed')) {
                materialLink = (
                  <a href='#' onClick={() => doDownload(v.filePath)}>
                    Baixar material da aula
                  </a>
                );
              } else {
                materialLink = (
                  <a href='#' onClick={() => setFile(v.filePath)}>
                    Abrir material da aula
                  </a>
                );
              }
            }
    
            vs.push(
              <div className="video center col-md-4">
                <iframe src={v.url} 
                    title={v.title} frameborder="0"  
                    allowFullScreen='1'
                />
    
                <p><b>{v.title}</b></p>
                <p>{v.resume}</p>

                {materialLink}
              </div>
            );
          }
    
          setVideos(vs);
        } else {
          setVideos([
            <div className="center col-6 offset-3" style={{marginTop:100}}>
              <p>Estamos preparando nosso conteúdo para você!<br/>Volte mais tarde para visualizar o material.</p>
            </div>
          ]);
        }
      } else {
        setVideos([
          <div className="center col-6 offset-3" style={{marginTop:100}}>
            <p>Estamos preparando nosso conteúdo para você!<br/>Volte mais tarde para visualizar o material.</p>
          </div>
        ]);
      }
        
      if(rs.status === 401 || rs.status === 403)
        errorHandler(rs.status);
    })
    .then(() => setLoading(false))
    .catch(errorHandler);
  }, []);

  const handleLogout = () => {
    logout({}, errorHandler).then(() => errorHandler('logout'));
  }

  const renderArquivo = () => {
    if(file && file !== null){
      return (
        <Modal show={true} hideCloseBtn={false} 
            closeAction={() => setFile()}
            content={
              <object className='app-file-content' data={file}></object>
            }
        />
      );
    } else {
      return <></>
    }
  }

  const renderContent = () => {
    if(loading === true){
      return <Loader />
    } else {
      return (
        <div className="row">
          {videos}
        </div>
      );
    }
  }

  return (
    <div className="home">
      <div className="row">
        <div className="col">
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
      {renderContent()}
      {renderArquivo()}
      <Footer/>
    </div>
  )
}