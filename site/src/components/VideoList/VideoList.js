import React, {useState, useEffect} from "react";
import VideoListItem from "../VideoListItem/VideoListItem";
import { getVideos } from "../../Utils/Rest";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader/Loader";

export default function VideoList({navHandler=()=>null}) {
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const errorHandler = (e) => {
    console.log(e);

    localStorage.clear();

    navHandler(null, '/');
  }

  const init = () => {
    setVideos([]);
    setError(null);
    setLoading(true);

    getVideos(errorHandler)
    .then(rs => {
      let vds = [];
      
      if(rs.status === 200 && rs.data !== null){
        let vs = rs.data.videos;

        for(let i=0; i< vs.length; i++){
          vds.push(
            <VideoListItem key={vs[i].id} item={vs[i]} 
                onChange={init} onError={setError}/>
          );
        }
      }

      vds.push(
        <VideoListItem key={'adc_new'} 
            onError={setError} onChange={init}/>
      );

      setVideos(vds);

      if(rs.status === 401 || rs.status === 403)
        errorHandler(rs.status);
    })
    .then(() => setLoading(false))
    .catch(errorHandler);
  }

  const renderError = () => {
    if(error && error !== null)
      return <small onClick={() => setError(null)} className='error'>{error}</small>;
    else
      return <></>
  }

  const renderContent = () => {
    if(loading === true){
      return <Loader />
    } else {
      return (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Título</th>
                <th scope="col">Descrição</th>
                <th scope="col">Link</th>
                <th scope="col" className="center">
                  <a href='#' onClick={init}>
                    <FontAwesomeIcon icon={faRefresh} 
                        size={"1x"} className="icon-link"/>
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {videos}
            </tbody>
          </table>
        
          {renderError()}
        </>
      );
    }
  }

  return renderContent();
}