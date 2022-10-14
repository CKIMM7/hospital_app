import { useContext } from "react";
import { BrowserRouter as Router, 
            Redirect, 
            Switch, 
            Route, 
            useHistory, 
            useRouteMatch, 
            Link } from "react-router-dom";
import AuthFBContext from "../../store/auth-contextFB";
import Login from "./Login";
import classes from './UserAccount.module.css';

const UserAccount = () => {

    const authFBCtx = useContext(AuthFBContext);
    const { path } = useRouteMatch();

    if(!authFBCtx.currentUser) {
        return (
            <Login />
        )
    } 

    return(
        <>
          <div className={classes.box}>
            <div>Name:</div>
            <div>{authFBCtx.currentUser.displayName}</div>
            <Link to={`${path}/acntnamechange`}>Edit</Link>
          </div>

          <div className={classes.box}>
            <p>Email:</p>
            <div>{authFBCtx.currentUser.email}</div>
            <button >Edit</button>
          </div>

          <div className={classes.box}>
            <p>Mobile Phone Number:</p>
            <div>123</div>
            <button >Edit</button>
          </div>

          <div className={classes.box}>
            <p>Password</p>
            <div>******</div>
            <button >Edit</button>
          </div>

          <div className={classes.box}>
            <p>Two-Step Verification (2SV) Settings:</p>
            <div>Manage your Two Step Verification (2SV) Authenticators</div>
            <button >Edit</button>
          </div>

          <p className={classes.box}>Email Verified?</p>
          <p>{authFBCtx.currentUser.emailVerified.toString()}</p>
        </>
    );
};

export default UserAccount;