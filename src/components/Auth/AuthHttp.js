import React, { useState, useContext } from 'react';

import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const AuthHttp = () => {

    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
  
    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };
  
    const sendHttp = (enteredEmail, enteredPassword) => {
    
      // optional: Add validation
  
      setIsLoading(true);
  
      let url;
      if (isLogin) {
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7eztikZP7hPLrQeeV3A4FIIbWqR36BNU';
      } else {
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7eztikZP7hPLrQeeV3A4FIIbWqR36BNU';
      }
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              console.log(data.error.message)
  
              let errorMessage = 'Authentication failed!';
              if (data && data.error && data.error.message === "EMAIL_NOT_FOUND") {
                errorMessage = 'Email is not found'
              } 
  
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );

          console.log(data.email)

          authCtx.login(data.idToken, 
                        expirationTime.toISOString(), 
                        data.email);

          history.replace('/en');
        })
        .catch((err) => {
          alert(err.message);
        });
    };

    return {
        isLogin: isLogin,
        setIsLogin: setIsLogin,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        sendHttp: sendHttp, 
        switchAuthModeHandler: switchAuthModeHandler
    }

} 

export default AuthHttp;