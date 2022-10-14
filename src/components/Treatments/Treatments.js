import React, { useState } from "react";
import TreatmentItem from "./TreatmentItem";
import TreatmentServices from "./TreatmentServices";

import cancer from '../../assets/treatmentImages/cancer.png'
import telemedicine from '../../assets/treatmentImages/telemedicine.png'
import dentist from '../../assets/treatmentImages/dentist.png'
import female from '../../assets/treatmentImages/female.png'
import male from '../../assets/treatmentImages/male.png'

import classes from './Treatments.module.css'

const treatmentData = [
    {
     name: 'Telemedicine',
     image: `${telemedicine}`,
     types: ['Global Top 100 Hospital', 
             'General Hospital', 
             'Orthopedic Hospital',
             "Women's Hospital"
            ]
    },
    {
        name: 'Cancer&Tumor',
        image: `${cancer}`,
        types: ['Colorectorl cancer', 
                'Kidney cancer', 
                'Pediatric cancer',
                "Brain tumor"
               ]
       },
       {
        name: 'Dentist',
        image: `${dentist}`,
        types: ['Implant surgery', 
                'Tooth decay treatment', 
                'Scaling',
                "Whitening"
               ]
       },
       {
        name: 'Female Disease',
        image: `${female}`,
        types: ['IVF(Infertility)', 
                'Uterine fibroid', 
                'Cervic cancer',
                'Breast cancer',
                'Other femalse disease'
               ]
       },
       {
        name: 'Male Disease',
        image: `${male}`,
        types: ['Implant surgery', 
                'Benign prostatic hyperplasia', 
                'Prostate cancer',
                "Other male diseases"
               ]
       },
]

const Treatments = (props) => {

        const returnThis = (treatment) => treatment.map((element, index) => (
                <TreatmentServices
                  key={index}
                  type={element}/>
        ))

        const returnThisCombined = (treatment) => {

        const func = (treatment) = treatment.map((element, index) => (
                <TreatmentServices
                key={index}
                type={element}/>
                ))

                return func;
        }
        
                
    const treatmentList = treatmentData.map((treatment, index) => (
        <TreatmentItem
          key={index}
          id={index}
          name={treatment.name}
          img={treatment.image}
          types={treatment.types}
          types1={returnThis.bind(null, treatment.types)}
          types2={returnThisCombined.bind(null, treatment.types)}
          onService={props.onService}
        />
      ));
      

    return (
        <section className={classes.treatments}>
            <ul>
            {treatmentList}
            </ul>
        </section>
    )
};

export default Treatments;