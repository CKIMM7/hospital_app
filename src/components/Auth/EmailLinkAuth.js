import React, { useRef, useState, useContext, useEffect } from "react"
import { Link, useHistory, useRouteMatch, useLocation } from "react-router-dom"

import AuthFBContext from "../../store/auth-contextFB";
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";

import classes from './AuthForm.module.css';

const EmailLinkAuth = () => {
    const authFBCtx = useContext(AuthFBContext);
    const match = useRouteMatch()
    const emailInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredEmail = emailInputRef.current.value;
        authFBCtx.emailLinkAuth(enteredEmail);
      }

    useEffect (()=> {
      //console.log(authFBCtx.currentUser)
    }, [authFBCtx.currentUser]) 
    

    return(
    <div className={classes.container}>
    <section className={classes.box}>
      <h1>Sign In With Email</h1>
      <form onSubmit={submitHandler}>

        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>

        <div className={classes.actions}>
          <button>
          Send Email Verification
          </button>

          <div className={classes.toggle}>
              Forgot password? <br/>
              <Link to={'./forgot-password'}>Find Password</Link>
          </div>
        </div>
      </form>
    </section>
    <GoogleLogin />
    <FacebookLogin />  
    </div>
    );
};

export default EmailLinkAuth;