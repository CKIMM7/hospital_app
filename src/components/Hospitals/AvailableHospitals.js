import React from "react";
import { dummyData } from "./dummyData";
import HospitalItem from "./HospitalItem/HospitalItem";
//import Card from "../UI/Card";
import classes from './AvailableHospitals.module.css'

const AvailableHospitals = () => {

  const hospitalList = dummyData.map((hospital) => (
    <HospitalItem
      key={Math.random()}
      // id={hospital.id}
      name={hospital.BIZPLC_NM}
      operation={hospital.BSN_STATE_NM}
      address={hospital.REFINE_LOTNO_ADDR}
      staffCount={hospital.MEDSTAF_CNT}
      bedCount={hospital.SICKBD_CNT}
      services={hospital.TREAT_SBJECT_CONT}
    />
  ));

    return (
      <section className={classes.hospital}>

          <h2>AvailableHospitals.js</h2>
          <ul>{hospitalList}</ul>
 
      </section>
    );
  };
  
  export default AvailableHospitals;