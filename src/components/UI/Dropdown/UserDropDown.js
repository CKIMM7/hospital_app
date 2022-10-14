import React, { useContext }  from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import AuthContext from '../../../store/auth-context';
import AuthFBContext from '../../../store/auth-contextFB';

import classes from './UserDropDown.module.css'
import Dropdown from 'react-bootstrap/Dropdown';

function UserDropDown(props) {
  const match = useRouteMatch()
  const authCxt = useContext(AuthContext);
  const authFBCxt = useContext(AuthFBContext);

  const signedIn = (`Hello 
  ${authFBCxt.currentUser.email}`)

  const signedOut = (
    `Hello Sign In`
  )

  const signOutHandler = () => {
    console.log('signed out')
    authFBCxt.logout()
  }

  return (
    <Dropdown>
      <Dropdown.Toggle 
      variant="success" 
      id="dropdown-basic"
      className={classes.dropdown}
      >
      {authFBCxt.currentUser ? signedIn : signedOut}
      </Dropdown.Toggle>

      <Dropdown.Menu>

        <Dropdown.Item
          as={Link}
          to={`${match.url}/auth/acnt`}
          className={classes.dropDownItem}
          
        >
          My Acount
          </Dropdown.Item>

        <Dropdown.Item
          as={Link}
          to={`${match.url}/auth/profile`} 
          className={classes.dropDownItem}
        >
          My Profile
        </Dropdown.Item>

        <Dropdown.Item
          as={Link}
          to={`${match.url}/quotes`}
          className={classes.dropDownItem}
        >
          My Quotes
        </Dropdown.Item>

        <Dropdown.Item
          as={Link}
          to={`${match.url}/auth/signin`}
          className={classes.dropDownItem}
        >
          Sign In
        </Dropdown.Item>

        <Dropdown.Item
          onClick={signOutHandler}
          className={classes.dropDownItem}
        >
          Sign out
        </Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserDropDown;