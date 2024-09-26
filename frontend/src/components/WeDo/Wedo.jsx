import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import './wedo.css';
import img from './scroll-img.gif';

const Example = () => {
  const isMobileOrTablet = window.innerWidth <= 900;

  return (
    <HorizontalScrollCarousel disableScroll={isMobileOrTablet} />
  );
};

const HorizontalScrollCarousel = ({ disableScroll }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    enabled: !disableScroll,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-68%"]);

  return (
    <section ref={targetRef} className="carousel-section">
      <div className="carousel-wrapper">
        <motion.div style={{ x: disableScroll ? '0%' : x }} className="carousel-content">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-image col">
          <img src={img} alt="" id='img-card' />
        </div>
      </div>
      <div>
        <div className="card-container2">
          <div className='row text-white fw-lite col'>
            <div className='card-content'>
              <span className='bg-warning rounded-2 text-black me-2' id='one'>{card.sno} </span>
              <h1 className='' id='one'>{card.title}</h1>
            </div>
            <div className='fs-3'>
              <p className='fw-light'>  {card.description}</p>
              <button className='btn btn-outline-light rounded-pill mt-3 btn-lg '>{card.btn} <i className="bi bi-arrow-right-circle-fill text-warning"> </i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;

const cards = [
  {
    sno: "01.",
    title: "UI/UX Design",
    description: "We blend art and technology, form and function, ideas and execution. In our digital playground, creativity is king and every pixel tells a story. With us, your brand's vision takes shape in vibrant, tangible forms, turning the abstract into the iconic.",
    btn: "Explore Design",
    id: 1,
  },
  {
    sno: "02.",
    title: "Development",
    description: "We blend art and technology, form and function, ideas and execution. In our digital playground, creativity is king and every pixel tells a story. With us, your brand's vision takes shape in vibrant, tangible forms, turning the abstract into the iconic.",
    btn: "Explore Development",
    id: 2,
  },
  {
    sno: "03.",
    title: "Optimization",
    description: "We blend art and technology, form and function, ideas and execution. In our digital playground, creativity is king and every pixel tells a story. With us, your brand's vision takes shape in vibrant, tangible forms, turning the abstract into the iconic.",
    btn: "Explore SEO",
    id: 3,
  },
];
