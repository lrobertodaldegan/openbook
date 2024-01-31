import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFloppyDisk, faTrashAlt, faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { deleteVideo, saveVideo } from "../../Utils/Rest";

export default function VideoListItem({
                                item=null, 
                                navHandler=()=>null,
                                onError=()=>null,
                                onChange=()=>null
                              }) {
  const [id, setId] = useState(item?._id);
  const [title, setTitle] = useState(item?.title);
  const [subTitle, setSubTitle] = useState(item?.resume);
  const [link, setLink] = useState(item?.url);

  const errorHandler = (e) => {
    console.log(e);

    localStorage.clear();

    navHandler(null, '/');
  }

  const handleDeletion = () => {
    deleteVideo(id, errorHandler).then(() => {
      onChange();
    });
  }

  const handleSave = (v) => {
    if(!title || !link){
      onError('É necessário informar título e link para cadastrar um vídeo!');
    } else {
      saveVideo(v, errorHandler).then((rs) => {
        if(rs.status === 201){
          onChange(v);
        } else {
          onError(`${rs.status} - ${rs.data?.message}`);
        }
      });
    }
  }

  const handleLink = () => {
    onError(null);

    if(link && link !== null && link.includes('https')){
      let id = null;

      if(!link.includes('embed')){
        let s  = link.includes('watch') 
                          ? link.split('v=') 
                          : link.split('youtu.be/');
        if(s.length > 1)
          id = s[1];

        if(id !== null){
          setLink(`https://www.youtube.com/embed/${id}`);
          onError(null);
        } else {
          onError('Informe um link de vídeo válido');
        }
      }
    }
  }

  const renderLinkAction = () => {
    if(link && link !== null){
      return (
        <a href={link} target='_blank'>
          <FontAwesomeIcon icon={faUpRightFromSquare} 
              size={"1x"} className="icon-link"/>
        </a>
      );
    } else {
      return <></>
    }
  }

  const renderActions = () => {
    if(item && item !== null){
      return (
        <FontAwesomeIcon icon={faTrashAlt} 
            onClick={() => handleDeletion()}
            size={"1x"} className="icon"/>
      );
    } else {
      return (
        <FontAwesomeIcon icon={faFloppyDisk} 
            onClick={() => handleSave({title:title,resume:subTitle,url:link, visibility:'Public'})}
            size={"1x"} className="icon-save"/>
      );
    }
  }

  return (
    <tr key={id && id !== null ? id : 'new'}>
      <td>
        <input type='text'
            value={title}
            onChange={(e) => {console.log(title); setTitle(e.target.value);}}
            placeholder="Título do vídeo"/>
      </td>
      <td>
        <input type='text'
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder="Descrição breve do vídeo"/>
      </td>
      <td>
        <input type='text'
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onBlur={handleLink}
            placeholder="Link do vídeo"/>

        {renderLinkAction()}
      </td>
      <td className="center">
        {renderActions()}
      </td>
    </tr>
  );
}