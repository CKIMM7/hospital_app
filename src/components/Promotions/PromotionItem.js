import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import classes from './PromotionItem.module.css'

const PromotionItem = (props) => {

    const match = useRouteMatch()
    return (
        <li className={classes.box}>
          <Link to={`${match.url}/${props.name}`}>
            <h3>{props.name}</h3>
            <p>{props.city}</p>
            <p>{props.tele}</p>
            <p>{props.address}</p>
          </Link>
        </li>
    )
};

export default PromotionItem;