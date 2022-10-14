import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import LangContext from '../../../store/lang-context';

import Dropdown from 'react-bootstrap/Dropdown';
import classes from './Language.module.css'

function DropdownBasicExample(props) {
  const langCxt = useContext(LangContext);


  return (
    <Dropdown >
      <Dropdown.Toggle 
        variant="success" 
        id="dropdown-basic"
        className={classes.langDropDown}
        >
        Languages
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <p>current: {langCxt.lang}</p>

        <Dropdown.Item
          as={Link}
          to={"/en"}>
          English</Dropdown.Item>
        
        <Dropdown.Item
          as={Link}
          to={"/fr"}>
          French</Dropdown.Item>

        <Dropdown.Item
          as={Link}
          to={"/ar"}>
          Russian</Dropdown.Item>

        <Dropdown.Item
          as={Link}
          to={"/ru"}>
          Russian</Dropdown.Item>


      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownBasicExample;