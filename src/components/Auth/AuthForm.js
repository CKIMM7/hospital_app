import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthFBContext from '../../store/auth-contextFB';
import AuthContext from '../../store/auth-context';
import AuthHttp from './AuthHttp';

import classes from './AuthForm.module.css';

const AuthForm = () => {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authFBCtx = useContext(AuthFBContext);

  const authCtx = useContext(AuthContext);
  const { 
    isLogin, 
    setIsLogin, 
    isLoading, 
    setIsLoading, 
    sendHttp, 
    switchAuthModeHandler } = AuthHttp()

  
  console.log(isLogin)
  
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //Add validation
    //sendHttp(enteredEmail, enteredPassword)
    authFBCtx.signup(enteredEmail, enteredPassword)
  }

  return (
    <section className={classes.auth}>

      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

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
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;