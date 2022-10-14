import { NavLink, Link } from 'react-router-dom';
import Language from '../../UI/Dropdown/Language';
import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <Link 
        className={classes.logo}
        to={`/mainpage`}
        >Khôpitaux
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/regions' activeClassName={classes.active}>
              Région
            </NavLink>
          </li>
          <li>
            <NavLink to='/promotions' activeClassName={classes.active}>
              Promotions
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              Demande pour quotation
            </NavLink>
          </li>

          <li>
            <NavLink to='/signin' activeClassName={classes.active}>
              Sign In
            </NavLink>
          </li>
          <li>
            {<Language 
                lang={props.lang}
                setLanguage={props.setLanguage}
            />}
          </li>
 
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;