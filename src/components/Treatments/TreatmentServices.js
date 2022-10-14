import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import classes from './TreatmentServices.module.css'


const TreatmentServices = (props) => {
    const { path, url } = useRouteMatch();

    const hosID = props.type.replace(/\s/g, '')

    return (
        <li className={classes.box}>
            <Link to={`${url}/hospitals/${hosID}`}>{props.type}</Link>
        </li>
    )}; 

export default TreatmentServices