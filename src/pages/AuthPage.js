import { BrowserRouter as Router, Redirect, Switch, Route, useHistory, useRouteMatch } from "react-router-dom"
import PrivateRoute from "../components/Auth/PrivateRoute";

import AuthForm from "../components/Auth/AuthForm";
import PasswordAuth from "../components/Auth/PasswordAuth";
import EmailLinkAuth from "../components/Auth/EmailLinkAuth";
import Login from "../components/Auth/Login";
import ForgotPassword from "../components/Auth/ForgotPassword";
import FinishSignUp from "../components/Auth/FinishSignUp";
import UserAccount from "../components/Auth/UserAccount";
import AccountNameChange from "../components/Auth/MyAccount/AccountNameChange";

import UserProfile from "../components/Auth/UserProfile";
import Promotions from "./Promotions";

import GoogleLogin from "../components/Auth/GoogleLogin";
import FacebookLogin from "../components/Auth/FacebookLogin";
import GoogleButton from "../components/UI/Button/GoogleButton";

import classes from './AuthPage.module.css'

const AuthPage = () => {

  const { path } = useRouteMatch();
  const history = useHistory();

  let signUpOnly = window.localStorage.getItem('removeOnceSignedUp');
  console.log(path)
  
  return (
  <div className={classes.align }>
    <Switch>
        <Route path={`${path}`} exact>
          <Redirect to={`${path}/signin`} />
        </Route>
        <Route path={`${path}/acnt`} component={UserAccount} exact/>
        <Route path={`${path}/acnt/acntnamechange`} component={AccountNameChange} />
        <PrivateRoute exact path={`${path}/profile`} component={UserProfile} />
        <Route path={`${path}/signin`} component={Login} exact/>
        <Route path={`${path}/signup`} component={EmailLinkAuth} exact/>
        <Route path={`${path}/forgot-password`} component={ForgotPassword} exact/>
        {signUpOnly && <Route path={`${path}/finishsignup`} component={FinishSignUp} exact/>}
    </Switch>
  </div>
  )
};

export default AuthPage;