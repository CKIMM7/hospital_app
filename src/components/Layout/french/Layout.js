import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  
  return (
    <Fragment>
      <MainNavigation 
        lang={props.lang}
        setLanguage={props.setLanguage}

        />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;