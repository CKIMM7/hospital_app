import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import classes from './HospitalItem.module.css'

const HospitalItem = (props) => {
    const match = useRouteMatch()

    return (
        <li className={classes.box}>
            <NavLink activeClassName={classes.active} 
                    to={`${match.url}/${props.name}`} >
                <h3>{props.name}</h3>
                <p>{props.operation}</p>
                <p>{props.address}</p>
                <p>Staff count: {props.staffCount}</p>
                <p>Bed count: {props.bedCount}</p>
                <p>Services available: {props.services}</p>
            </NavLink>
        </li>
    );
  };
  
  export default HospitalItem;