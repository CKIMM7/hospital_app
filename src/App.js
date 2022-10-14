import React, { useEffect, useContext } from 'react';
import { Redirect, 
          Route, 
          Switch, 
          useParams, 
          useHistory, 
          useLocation, 
          useRouteMatch,
          Router
         } from 'react-router-dom';

import LangContext from './store/lang-context';
import AuthFBContext from './store/auth-contextFB';
import DBContext from './store/db-context';

import LanguageRouter from './router/LanguageRouter';
import EnglishRouter from './router/EnglishRouter';
import FrenchRouter from './router/FrenchRouer';
import NotFound from './pages/NotFound';

import './App.css';

function App() {

const langCxt = useContext(LangContext);
const authFBCtx = useContext(AuthFBContext);
const dBCtx = useContext(DBContext);

const params = useParams();
const history = useHistory();
const location = useLocation();
const match = useRouteMatch();

//const watchUrl = location.pathname.slice(1,3)

dBCtx.dbAuthLink(authFBCtx.currentUser.uid)

const ipFetch = () => {
  fetch('https://api.ipregistry.co/?key=awmnk0vdulffypif')
.then(function (response) {
    return response.json();
})
.then(function (payload) {
    console.log(payload.location.language.code);
    langCxt.setLanguage(payload.location.language.code)
    localStorage.setItem('lang', payload.location.language.code)
})};

//dBCtx.getUserData();
//dBCtx.createUser();

useEffect (()=> {

  //if user lang exists by pass the code below

  if(!localStorage.getItem('lang')) {
    ipFetch();
    console.log('ipFetch')
  } else {
    console.log(location.pathname.slice(1,3))
    langCxt.setLanguage(location.pathname.slice(1,3))
  }

  console.log(`useEffect app.js`)
  
},[location.pathname.slice(1,3)])


// console.log(langCxt.lang)
// console.log(location.pathname)

// return (
//         <Switch>
//           <Route path='/' exact>
//             <Redirect to='/en' />
//           </Route>
//           {langCxt.lang === 'en' && <Route path="/en">
//             <EnglishRouter />
//           </Route>}
//           {langCxt.lang === 'fr' && <Route path="/fr">
//             <FrenchRouter/>
//           </Route>}
//           <Route path='*'>
//             <NotFound />
//           </Route>
//         </Switch>
// )


return (
        <Switch>
          <Route path='/en'>
            <EnglishRouter />
          </Route>
          <Route path="/fr">
            <FrenchRouter/>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
);

// if(location.pathname === '/en') {

//   return (
//     <EnglishRouter  />
//   )
  
// }

// if(langCxt.lang === 'english') {

//   return (
//     <EnglishRouter />
//   )
  
// }

// if(langCxt.lang === 'french') {

//   return (
//     <FrenchRouter/>
//   )
  
// }


}


export default App;

