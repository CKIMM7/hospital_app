import React, { useRef, useEffect, useContext } from "react";
import AuthFBContext from "../../../store/auth-contextFB";
import DBContext from "../../../store/db-context";
import classes from './MyAccountAuthForm.module.css';

const AccountNameChange = () => {

        const nameInputRef = useRef();
        const authFBCtx = useContext(AuthFBContext);
        const dBCtx = useContext(DBContext);
    
        const submitHandler = (event) => {
            event.preventDefault();
        
            const enteredName = nameInputRef.current.value;
            console.log('name change!!!')
            authFBCtx.updateName(enteredName);
          }
    
        useEffect (()=> {
          //console.log(authFBCtx.currentUser)
        }, [authFBCtx.currentUser]) 
        
    
        return(
        <div className={classes.container}>
        <section className={classes.box}>
          <h1>Change your name</h1>
          <form onSubmit={submitHandler}>
    
            <div className={classes.control}>
              <label htmlFor='name'>New Name</label>
              <input type='name' id='name' required ref={nameInputRef} />
            </div>
    
            <div className={classes.actions}>
              <button>
              Save changes
              </button>
    
            </div>
          </form>
        </section>
        </div>
        );
}

export default AccountNameChange;