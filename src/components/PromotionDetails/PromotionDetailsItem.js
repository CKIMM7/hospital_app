import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

import classes from './PromotionDetailsItem.module.css'

const PromotionDetails = () => {
    const params = useParams()
    return(
    <div className={classes.box}>
        <h3>Promotion details</h3>
        <p>{params.promoID}</p>
    </div>
        )
}

export default PromotionDetails