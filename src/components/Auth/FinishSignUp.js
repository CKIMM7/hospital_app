import React, { useState, useEffect, useContext } from "react"
import AuthFBContext from "../../store/auth-contextFB";


const FinishSignUp = () => {
    const authFBCtx = useContext(AuthFBContext);
    const currentUser = authFBCtx.currentUser;

    const logOutHandler = () => {
        authFBCtx.logout();
    }

    useEffect(()=>{
            authFBCtx.emailLinkComplete(window.location.href)
    },[])
    

    return (
    <div>
      {currentUser && <p> Hi, {currentUser.email}</p>}
      <p>you've successfully completed your sign-in process.</p>
      <button onClick={logOutHandler}>sign-out</button>
    </div>
 )   
}

export default FinishSignUp;