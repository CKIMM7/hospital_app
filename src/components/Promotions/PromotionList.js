import React from "react";
import PromotionItem from "./PromotionItem";
import { gyeongiCultureCenters } from "./gyeongiCultureCenters";

import classes from './PromotionList.module.css'

const PromotionList = () => {

    const promotionList = gyeongiCultureCenters.map((element, index) => 
                <PromotionItem
                    key={index} 
                    city={element.SIGUN_NM}
                    name={element.SI_DESC}
                    tele={element.TELNO}
                    address={element.REFINE_ROADNM_ADDR}
                />
            )

    return(<ul className={classes.box}>
        {promotionList}
    </ul>)
}

export const exportPromoList = gyeongiCultureCenters.map(
    (element, index) => 
        <PromotionItem
            key={index} 
            city={element.SIGUN_NM}
            name={element.SI_DESC}
            tele={element.TELNO}
            address={element.REFINE_ROADNM_ADDR}
        />)

export default PromotionList;

