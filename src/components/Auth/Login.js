import React, { useRef, useState, useContext } from "react"
import { Link, useHistory, useRouteMatch, useLocation } from "react-router-dom"
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";

import AuthFBContext from "../../store/auth-contextFB";

import classes from './AuthForm.module.css';

const Login = (props) => {
    const authFBCtx = useContext(AuthFBContext);
    const { path, url } = useRouteMatch()
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        authFBCtx.login(enteredEmail, enteredPassword);
      }

    return(
    <div className={classes.container}>  
    <section className={classes.box}>
      <h1>Login</h1>
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
          <button
           className={classes.toggle}>
              Need an account? <br/>
              <Link to="./signup">Sign Up</Link>
          </button>
        </div>
      </form>
    </section>
    <GoogleLogin />
    <FacebookLogin />
    </div>
    );
};

export default Login;