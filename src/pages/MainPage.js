import { Fragment, useContext } from 'react';
import AuthFBContext from '../store/auth-contextFB';
import IndividualIntervalsExample from '../components/UI/Carousel/IndividualIntervalsExample';
import Treatments from '../components/Treatments/Treatments';
import PromoMainPage from '../components/Promotions/PromoMainPage';


const MainPage = (props) => {
  const authFBCtx = useContext(AuthFBContext);

    console.log(authFBCtx.currentUser)
    return (
    <Fragment>
      <Treatments />
      <IndividualIntervalsExample />
      <PromoMainPage />
    </Fragment>
    )
};

export default MainPage;
