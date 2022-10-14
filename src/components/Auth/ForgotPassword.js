import React, { useRef, useState, useContext } from "react"
import { Link } from "react-router-dom"
import AuthFBContext from "../../store/auth-contextFB";
import classes from './AuthForm.module.css'

const ForgotPassword = () => {
    const authFBCtx = useContext(AuthFBContext);
    const emailInputRef = useRef();

    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const submitHandler = (event) => {
        event.preventDefault();
    
        const enteredEmail = emailInputRef.current.value;
        authFBCtx.resetPassword(enteredEmail);
      }

    return(
    <section className={classes.box}>
      <h1>Reset Password</h1>
      <form onSubmit={submitHandler}>

        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>

        <div className={classes.actions}>
        <button>
        Login
        </button>

        <div className={classes.toggle}>
            Already Registered? <br/>
            <Link to={'./login'}>Log In!</Link>
        </div>
        </div>
      </form>
    </section>
    );
};

export default ForgotPassword;