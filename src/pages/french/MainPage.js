import { Fragment } from 'react';
import HospitalSummary from "../../components/Hospitals/HospitalSummary";
import AvailableHospitals from "../../components/Hospitals/AvailableHospitals";

const MainPage = () => {

    return (
    <Fragment>
      <AvailableHospitals />
      <HospitalSummary />
    </Fragment>
    )
};

export default MainPage;
