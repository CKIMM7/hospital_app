import { useContext } from 'react';
import { NavLink, Link, useRouteMatch, useHistory } from 'react-router-dom';

import AuthFBContext from '../../store/auth-contextFB';

import Language from '../UI/Dropdown/Language';
import UserDropDown from '../UI/Dropdown/UserDropDown';
import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
  const authFBCtx = useContext(AuthFBContext);
  const { path, url } = useRouteMatch();
  const history = useHistory();

  console.log(path)

  return (
    <header className={classes.header}> 
      <Link 
        className={classes.logo}
        to={path}
        >MedNation
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to={`${path}/hospitals`} activeClassName={classes.active}>
              Hospitals
            </NavLink>
          </li>
          
          <li>
            <NavLink to={`${path}/promotions`} activeClassName={classes.active}>
              Promotions
            </NavLink>
          </li>

          <li>
            <NavLink to={`${path}/quotes`} activeClassName={classes.active}>
              Quotes
            </NavLink>
          </li>

          {!authFBCtx.currentUser && <li>
            <NavLink to={`${path}/auth`}activeClassName={classes.active}>
              Log-In
            </NavLink>
          </li>}

          <li>
            <UserDropDown />
          </li>
          
          <li>
            {<Language />}
          </li>
 
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;