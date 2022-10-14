import React, { useRef, useState, useContext } from "react"
import { Link, useHistory, useRouteMatch, useLocation } from "react-router-dom"

import AuthFBContext from "../../store/auth-contextFB";

import classes from './AuthForm.module.css';

const PasswordAuth = () => {
    const authFBCtx = useContext(AuthFBContext);
    const match = useRouteMatch()
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        authFBCtx.passwordAuth(enteredEmail, enteredPassword);
      }

    return(
    <section className={classes.box}>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>

        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
          <button>
          Login
          </button>

          <div className={classes.toggle}>
              Forgot password? <br/>
              <Link to={'./forgot-password'}>Find Password</Link>
          </div>
        </div>
      </form>
    </section>
    );
};

export default PasswordAuth;