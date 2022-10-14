import React, { useState, useContext } from 'react';
import { useHistory, Route, Switch, Redirect, useRouteMatch, useParams, BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import HospitalDetail from '../pages/HospitalDetail';
import MainPage from '../pages/MainPage';
import QuotePage from '../pages/QuotePage';
import NotFound from '../pages/NotFound';
import Promotions from '../pages/Promotions';
import PromotionDetails from '../pages/PromotionDetails';
import Regions from '../pages/Regions';
import AuthPage from '../pages/AuthPage';
import Hospitals from '../pages/Hospitals';
import UserProfilePage from '../pages/UserProfile';

const EnglishRouter = (props) => {
    const history = useHistory();
    const params = useParams();
    const { path, url } = useRouteMatch();


return (
    <Layout>
        <p>english route #127483</p>
        <Switch>
            <Route path={path} exact>
                <MainPage />  
            </Route>
            <Route path={`${path}/hospitals`} exact>
                <Hospitals />  
            </Route>
            <Route path={`${path}/hospitals/:hostID`} >
                <HospitalDetail />
            </Route>
            <Route path={`${path}/promotions`} exact>
                <Promotions />
            </Route>
            <Route path={`${path}/promotions/:promoID`}>
                <PromotionDetails />

            </Route>
            <Route path={`${path}/profile`}>
                <UserProfilePage />
            </Route>
            <Route path={`${path}/quotes`}>
                <QuotePage />
            </Route>

            <Route path={`${path}/auth`}> 
                <AuthPage />
            </Route>

        </Switch>
    </Layout>
  )
};

export default EnglishRouter;