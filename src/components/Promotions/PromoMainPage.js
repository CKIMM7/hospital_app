import { Link, useRouteMatch } from "react-router-dom";
import { exportPromoList } from "./PromotionList";
import { gyeongiCultureCenters } from "./gyeongiCultureCenters";
import classes from './PromoMainPage.module.css'

const PromoMainPage = () => {
    const match = useRouteMatch()

    const promoMainPageItems = gyeongiCultureCenters.slice(0, 5).map((element, index)=>(
        <li className={classes.box}
        key={index}>
        <Link to={`${match.url}/promotions/${element.SI_DESC.replace(/\s/g, '')}`}>
          <h3>{element.SI_DESC}</h3>
          <p>{element.SIGUN_NM}</p>
          <p>{element.TELNO}</p>
          <p>{element.REFINE_ROADNM_ADDR}</p>
        </Link> 
      </li>
    ))

    const exportPromoReturn = exportPromoList.slice(0,5)
    //console.log(exportPromoReturn)

    return(<ul className={classes.container}>
        {promoMainPageItems}
    </ul>)
}

export default PromoMainPage;