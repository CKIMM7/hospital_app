import React, { useState, useEffect, useContext } from "react"
import { useHistory, useRouteMatch } from "react-router-dom";
import LangContext from "./lang-context";
import DBContext from "./db-context";
import { auth } from "../firebase";
import { db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import {
        createUserWithEmailAndPassword,
        FacebookAuthProvider, 
        GoogleAuthProvider,
        isSignInWithEmailLink,
        onAuthStateChanged,
        signInWithEmailAndPassword,
        sendSignInLinkToEmail,
        sendPasswordResetEmail,
        signInWithEmailLink,
        signInWithPopup,
        signOut,
        setPersistence,
        updatePassword
        } from "firebase/auth";

const AuthFBContext = React.createContext({
  currentUser: '',
  login: ()=> {},
  googleLogin: ()=> {},
  facebookLogin: ()=> {},
  passwordAuth: ()=> {},
  emailLinkAuth: ()=> {},
  emailLinkComplete: ()=> {},
  logout: ()=> {},
  resetPassword: ()=> {},
  updateEmail: ()=> {},
  updatePassword:()=> {},
  updateName: ()=> {},
  test: ()=>{}
});

const userState = {
  signUpState : 'signUpState',
  signOutState : 'signOutState',
  sginInState: 'sginInState'
}

export const AuthFBContextProvider = (props) => {

  const [currentUser, setCurrentUser] = useState('');
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { path } = useRouteMatch();
  const langCxt = useContext(LangContext);
  const dBCtx = useContext(DBContext);
  

  function passwordAuth(email, password) {

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    history.push("/en")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });
  }

  function emailLinkAuth(email) {

    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: 'http://localhost:3000/en/auth/finishsignup',
      // This must be true.
      handleCodeInApp: true,
    };

    auth.languageCode = langCxt.lang;
    sendSignInLinkToEmail(auth, email, actionCodeSettings)  
    .then(() => {
      console.log(`The link was successfully sent. Inform the user.`)
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      window.localStorage.setItem('removeOnceSignedUp', email);
      // ...
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });

    return;
  }

  function emailLinkComplete (url) {

    // Confirm the link is a sign-in with email link.
if (isSignInWithEmailLink(auth, url)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, url)
    .then((result) => {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      window.localStorage.removeItem('removeOnceSignedUp');
      console.log(result)
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch((error) => {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}};

  function login(email, password) {

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      history.push("/en")
      //
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)

    });
  }

  function googleLogin(path) {
    console.log('googleLoginFunc!!!')

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
  
    //dBCtx.createUser(user.displayName, user.email, user.uid);
    //if user does not exist? then ?
    //dBCtx.createUser('dongyoung','dyounggkim@gmail.com');

    if (path.includes("auth/signup")) {
    history.push("/en")
  } 
    else {
      history.push(path)
    }
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(error);
  });}

  function facebookLogin() {
    
    const provider = new FacebookAuthProvider();    
    signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    console.log(error)
    // ...
  });

  }

  function test() {
    console.log('test')
  }

  function logout() {
 
    signOut(auth)
    .then(() => {
      setCurrentUser('');
      console.log(`Sign-out successful.`)
      history.push("/en")
    }).catch((error) => {
      // An error happened.
    });
    
  }

  function resetPassword(email) {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('password reset sent')
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {

    updatePassword(currentUser, password).then(() => {
      console.log('Update successful')
      // Update successful.
    }).catch((error) => {
      console.log('An error ocurred')
      // An error ocurred
      // ...
    });
  }

  async function updateName(newName) {

    const userRef = doc(db, "users", currentUser.uid);
    await updateDoc(userRef, {
      displayName: newName
    });

  }


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        

        setCurrentUser(user);
        console.log('currentuser:');
        console.log(user.uid);

        dBCtx.getUserData(user.uid)
        .then((result)=>{

          if(result === false) {
            console.log('creating a user profile for' + user.uid)
            dBCtx.createUser(user.displayName, user.email, user.uid);
          }
        });

        // ...
      } else {
        console.log('not logged in')
        // User is signed out
        // ...
      }
    });
  }, [currentUser])

  
    const contextValue = {
    currentUser,
    login,
    googleLogin,
    facebookLogin,
    passwordAuth,
    emailLinkAuth,
    emailLinkComplete,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateName,
    test
    };
  
    return (
      <AuthFBContext.Provider value={contextValue}>
        {props.children}
      </AuthFBContext.Provider>
    );
  };
  
  export default AuthFBContext;