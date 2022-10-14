import React, { useContext } from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Layout from "../components/Layout/french/Layout";

import MainPage from '../pages/french/MainPage';
import HospitalDetail from '../pages/french/HospitalDetail';
import NewQuote from '../pages/french/NewQuote';
import NotFound from '../pages/french/NotFound';
import Promotions from '../pages/french/Promotions';
import Regions from '../pages/french/Regions';
import SignIn from '../pages/french/SignIn';

import AuthFBContext from "../store/auth-contextFB";

const FrenchRouter = (props) => {
    const authFBCtx = useContext(AuthFBContext);
    const { path, url } = useRouteMatch();
    // console.log(`path`)
    console.log(path)

    // console.log(`URL`)
    // console.log(url)

    console.log(authFBCtx.currentUser)

    return (
        <Layout>
            <p>french route</p>
            <Switch>
                <Route path={path} exact>
                    <MainPage />  
                </Route>
                <Route path='/hospital/:hospitalId'>
                    <HospitalDetail />
                </Route>
                <Route path='/regions'>
                    <Regions />
                </Route>
                <Route path='/promotions'>
                    <Promotions />
                </Route>
                <Route path='/new-quote'>
                    <NewQuote />
                </Route>
                <Route path='/signin'> 
                    <SignIn />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
        </Switch>

        </Layout>
    )
};

export default FrenchRouter;