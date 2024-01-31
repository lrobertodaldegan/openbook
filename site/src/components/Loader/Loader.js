import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  return(
    <div className="center">
      <FontAwesomeIcon icon={faRefresh} size={"2x"} 
          className="icon-load"/>
    </div>
  );
}