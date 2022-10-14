import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import classes from './FacebookLogin.module.css'
import facebookLogo from '../../assets/styling/facebookLogo.svg'
import AuthFBContext from '../../store/auth-contextFB'
import {
    GoogleAuthProvider, 
    signInWithPopup,
    } from "firebase/auth";

import { auth } from '../../firebase';

const FacebookLogin = () => {
    const provider = new GoogleAuthProvider();
    const authFBCtx = useContext(AuthFBContext);


    const facebookLoginHandler = () => {
        authFBCtx.facebookLogin();
    }

    return(
<div className={classes.facebookBtn} onClick={facebookLoginHandler}>
  <div className={classes.facebookIconWrapper}>
  <img className={classes.facebookIcon} 
  src={facebookLogo}/>
  </div>

  <p className={classes.btnText}><b>Sign in with Facebook</b></p>
</div>)
}

export default FacebookLogin;