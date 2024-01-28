import React from "react";
import './LoginPage.css';
import logo from '../../assets/img/logo.png';

export default function LoginPage({navHandler=()=>{}}){
    return(
        <>
            <img src={logo}/>
        </>
    );
}