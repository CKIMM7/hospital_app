import React, { useContext } from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import classes from './GoogleLogin.module.css'
import googleBtnImg from '../../assets/styling/googleButtonLogo.svg'
import AuthFBContext from '../../store/auth-contextFB'
import {
    GoogleAuthProvider, 
    signInWithPopup,
    } from "firebase/auth";

import { auth } from '../../firebase';

const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const authFBCtx = useContext(AuthFBContext);

    const match = useRouteMatch();
    const params = useParams();

    console.log(match)

    const googleLoginHandler = () => {
        authFBCtx.googleLogin(match.path)
    }

    return(
<div className={classes.googleBtn} onClick={googleLoginHandler}>
  <div className={classes.googleIconWrapper}>
  <img className={classes.googleIcon} 
  src={googleBtnImg}/>
  </div>

  <p className={classes.btnText}><b>Sign in with google</b></p>
</div>)
}

export default GoogleLogin;