import React, { useState } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";

import TreatmentServices from "./TreatmentServices";
import TreatmentServicesItem from "./TreatmentServicesItem";
import Modal from "../UI/Modal/Modal";

import classes from './TreatmentItem.module.css';

const TreatmentItem = (props) => {
  const match = useRouteMatch();
  const location = useLocation();
  const [cartIsShown, setCartIsShown] = useState(false);
  const showServiceHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  
    const returnThis = props.types.map((eachArray, index) => (
          <TreatmentServices 
            key={index}
            type={eachArray}
          />
          ))

    const returnWrapper = () => ((
      <Modal onClose={hideCartHandler}>
      <TreatmentServicesItem>{props.types1()}</TreatmentServicesItem>
      </Modal>
    ))

    //console.log(props.types2())
    // console.log('test')
    // console.log(`${match.url}`)
    // console.log(`${match.path}`)

    return (
      <div>
        <li className={classes.box}>

            <img
              src={props.img}
              alt="placeholder"
              onClick={showServiceHandler}
              >
            </img>  

          <p>{props.name}</p>
          {cartIsShown && <Modal onClose={hideCartHandler}>{returnThis}</Modal>}
        </li>

      </div>
    )
};

export default TreatmentItem;

