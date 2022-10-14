import React, { useState, useEffect } from "react";
import { dummyData } from "./dummyData";
import classes from './HospitalSummary.module.css'


const HospitalSummary = () => {

  const [hospitalRoomTotal, setHospitalRoomTotal] = useState(0);
  const [sickBedTotal, setSickBedTotal] = useState(0);
  const [reloadState, setReloadState] = useState(false);

  useEffect(()=> {

    let sumTotalBedCount = 0;
    let sumTotalSickBedCount = 0;

    const totalRoomCount = dummyData.forEach((hospital) => {
      const roomNum = +hospital.HOSPTLRM_CNT;
      sumTotalBedCount += roomNum;
      //console.log(roomNum); 
    });

    const totalSickBedCount = dummyData.forEach((hospital) => {
      const roomNum = +hospital.SICKBD_CNT;
      sumTotalSickBedCount += roomNum;
      //console.log(roomNum); 
    });

  
    //console.log(sumTotalBedCount);
    setHospitalRoomTotal(sumTotalBedCount);
    setSickBedTotal(sumTotalSickBedCount);

  },[reloadState]);
  
  //   useEffect(()=> {
  //   let sum1 = 0;

  //   const totalBedCount = dummyData.forEach((hospital) => {
  //     const roomNum = +hospital.HOSPTLRM_CNT;
  //     sum1 += roomNum;
  //     //console.log(roomNum); 
  //   });

  //   setHospitalRoomTotal(sum1)

  // }, [dummyData])

  const totalHospitals = dummyData.length;
  const availHospitals = dummyData.filter((hospital) => {
    if (hospital.BSN_STATE_NM === '운영중') {
      return hospital;
    }
  }).length;


  const changeState = () => {
    setReloadState(
      (prev) => !prev
    );
  }

    // console.log(sum);
    //console.log(dummyData);
    //console.log(`HospitalSummary`);

    return (
      <section className={classes.summary}>
        <h2>HospitalSummary.js</h2>
        <button onClick={changeState}>state change</button>
        <div>
          <ul>
            <li>Total hospitals: {totalHospitals}</li>
            <li>Available hospitals: {availHospitals}</li>
            <li>Available number of rooms: {hospitalRoomTotal}</li>
            <li>Available number of sick beds: {sickBedTotal}</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default HospitalSummary;