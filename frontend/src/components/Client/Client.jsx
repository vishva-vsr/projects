import React from "react";
import { useEffect, useState } from 'react';
import './Client.css';
import pic from "../Client/airbnb.png"
import pic2 from "../Client/BOSCH.png"
import pic3 from "../Client/Google.png"
import pic4 from "../Client/lg.png"
import pic5 from "../Client/Microsoft.png"
import pic6 from "../Client/OYO.png"
import pic7 from "../Client/Royal.png"
import pic8 from "../Client/Samsung.png"
import pic9 from "../Client/sony.png"
import back1 from "../Client/Vector7.png"


function Client() {
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPositions({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="bg-white">
        <div className="container-4 row">
          <div className="marquee-container2 ">
            <div className="marquee-text2">
              <span>Our Clients &nbsp; Our Clients </span>
              <span className="text-white" id="sen-2">Our Clients &nbsp; Our Clients </span>
            </div>
          </div>
          <div className="object top-0 en  "
            style={{
              transform: `translateX(${positions.x / 20}px) translateY(${positions.y / 20}px)`
            }}
            data-value={1}
          >
            <img src={back1} alt="" class='position-absolute' width={300} id="grid" />
          </div>
          <div className="row mb-5"><p id="p-cli">I specialize in UI/UX & Graphic Design
            and my passion is all about building
            elegant and professional user interfaces.</p>
          </div>
          <div className="row text-center">
            <div className="mb-3 mt-4 me-2 col col-md-12 col-sm-6 w-100 ">
              <img src={pic} alt="" width={200} className="me-5 bg-light p-3 rounded-3 mb-3" />
              <img src={pic2} alt="" width={200} className="me-5 bg-light p-4 rounded-3 mb-3" />
              <img src={pic3} alt="" width={200} className="me-5 bg-light p-3 rounded-3 mb-3" />
              <img src={pic4} alt="" width={200} className="me-5 bg-light p-3 rounded-3 mb-3" />
              <img src={pic5} alt="" width={200} className="me-5 bg-light p-4 rounded-3 mb-3" />
            </div>
            <div className="row">
              <div className="col col-md-12  col-sm-6 mb-5 w-100 ms-4">
                <img src={pic6} alt="" width={200} className="me-5 bg-light p-3 rounded-3 mb-3" />
                <img src={pic7} alt="" width={200} className="me-5 bg-light p-3 rounded-3 mb-3" />
                <img src={pic8} alt="" width={200} className="me-5 bg-light p-4 rounded-3 mb-3" />
                <img src={pic9} alt="" width={200} className="me-5 bg-light p-4 rounded-3 mb-3" />
              </div>
            </div>
          </div>
        </div>
      </div></>

  )
}
export default Client;
