import React, { useContext } from "react";
import { Route, Redirect, useRouteMatch, useLocation } from "react-router-dom";
import AuthFBContext from "../../store/auth-contextFB";
import LangContext from "../../store/lang-context";

export default function PrivateRoute({ component: Component, ...rest }) {
  
    const authFBCtx = useContext(AuthFBContext);
    const langCxt = useContext(LangContext);
    const location = useLocation();

    const { path } = useRouteMatch();
    console.log('private route!!!');
    console.log(location.pathname.slice(1,3))

  return (
    <Route
      {...rest}
      render={props => {
        return authFBCtx.currentUser ? 
        <Component {...props} /> : <Redirect to={`/${langCxt.lang}/auth/signin`} />
      }}
    ></Route>
  );
};