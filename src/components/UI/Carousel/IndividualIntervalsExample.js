import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { dummyData } from '../../../components/Hospitals/dummyData';

import nhs from '../../../assets/carouselImages/nhs.jpg';
import asan from '../../../assets/carouselImages/asan_hosp.jpg';
import samsung from '../../../assets/carouselImages/samsung_seoul_hosp.jpeg';
import classes from './IndividualIntervalsExample.module.css'


function IndividualIntervalsExample(props) {

  const CarouselItem = dummyData.map((element, index) => (

    <Carousel.Item 
      interval={3000}
      key={index}>
    <img
      className="d-block w-100"
      src={nhs}
      alt="First slide"
    />
    <Carousel.Caption>
      <div className={classes.carouselCaption}>
        <h3>{element.BIZPLC_NM}</h3> 
        <p>{element.REFINE_ROADNM_ADDR}</p>
        <button>Check out</button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

  ));

  return (
    <section className={classes.carousel}>
      <Carousel>

      {CarouselItem}


        <Carousel.Item interval={30000}>
          <img
            className="d-block w-100"
            src={nhs}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className={classes.carouselCaption}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <button>Check out</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={asan}
            alt="Second slide"
          />
          <Carousel.Caption>
          <div className={classes.carouselCaption}>
            <h2>Seoul Asan Hospital</h2>
            <h4>Ranked #1 In Korea</h4>
            <button>Check out</button>
          </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={samsung}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div className={classes.carouselCaption}>
            <h2>Seoul Samsung Hospital</h2>
            <h4>Ranked #2 In Korea</h4>
            <button>Check out</button>
          </div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </section>
  );
}

export default IndividualIntervalsExample;