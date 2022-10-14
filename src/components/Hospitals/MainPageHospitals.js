import { Fragment } from 'react';

import HospitalSummary from './HospitalSummary';
import AvailableHospitals from './AvailableHospitals';

const Hospitals = () => {
  return (
    <Fragment>
      <HospitalSummary />
      <AvailableHospitals />
    </Fragment>
  );
};

export default Hospitals;