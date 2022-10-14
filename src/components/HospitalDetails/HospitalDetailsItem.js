import React from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import classes from './HospitalDetailsItem.module.css'
const HospitalDetailsItem = () => {

    const params = useParams();
    const { hostID } = params;

    return(
        
        <div className={classes.box}>
            <p>HospitalDetailsItem.js</p>
            <p>{hostID}</p>
        </div>
        )
}

export default HospitalDetailsItem;