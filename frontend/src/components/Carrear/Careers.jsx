import React from 'react';
import img11 from '../Carrear/img1.png';
import img12 from '../Carrear/img2.png';
import img13 from '../Carrear/img 3.png';
import img14 from '../Carrear/img4.png';
import grid from './Vector7.png';
import curve1 from './ecl1.png'
import curve2 from './ecl2.png'
import Empcard from '../OurEmp/Empcard';
import Frame from '../OurEmp/Frame';
import Jobs from '../Jobs/Jobs';
import { useEffect,useState } from 'react';
import "./careers.css"
import SeeJobs from '../seejobs/SeeJobs';
import { Link ,useNavigate } from 'react-router-dom'



function Careers() {
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

  const images = [img11, img12, img13, img14, img11,img12, img13, img14, img11]; 
  const navigate = useNavigate();
  return (
    
      <><div id='Careers'>
      <div className="text-center text-white pt-4 pb-1 mt-2">
        
        <h1 className="fw-light display-3">
          We're built for <span className="text-warning fw-bold display-3">software teams</span>
        </h1>
        <div className="object position-absolute mb-5 top-0 end-100 p-5 z-2 justify-content-end"
          style={{
            transform: `translateX(${positions.x / 20}px) translateY(${positions.y / 20}px)`
          }}
          data-value={1}
        >
          <img src={grid} alt="" class='position-absolute z-5' width={300} id="grid" />
        </div>
        <p>
          If you are a talented and ambitious individual looking to make a mark
          in your career, we invite you to explore our career opportunities.
        </p>
        
      </div>

      <div className="carousel-container mt-3">
        {/* <img src={curve1} alt="" width={1550} className='cur-adjs1 position-absolute z-1' /> */}
        <div className='eclipse1'></div>
        <div className="carousel-track mt-5 z-0 ">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index}`} className="carousel-image" />
          ))}
        </div>
        {/* <img src={curve2} alt="" width={1550} className='cur-adjs2 position-absolute  z-1' /> */}
        <div className='eclipse2'></div>
      </div>
      <div className="text-center pt-5 pb-4 ">
        <button className="button btn btn-warning btn-lg rounded-pill" onClick={()=>navigate('/SeeJobs')}>
          See Jobs
        </button>
      </div>
    </div>
    
    <Empcard /><Frame /><Jobs /></>
    
   
  );
}

export default Careers;
