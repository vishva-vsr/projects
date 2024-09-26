import use from "../Home/homeuse.gif"
import './Home.css'
import rect1 from '../Home/rect1.png'
import rect2 from '../Home/rect2.png'
import rect3 from '../Home/rect3.png'
import grid from './Vector 7.png'
import React, { useEffect, useState } from 'react';
import About from "../AboutUs/About"
import OurService from "../WeDo/OurService";
import Wedo from "../WeDo/Wedo.jsx"
import Client from "../Client/Client.jsx"
import Review from "../Review/Review.jsx"
import Consultant from "../Consultant/Consultant.jsx"
import Contactus from "../contact/Contactus.jsx"
import Footer from "../footer/Footer.jsx"
import { useLocation} from 'react-router-dom';

function Home() {


    const [positions, setPositions] = useState({ x: 0, y: 0 });
    const location = useLocation();
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

    useEffect(() => {
        console.log(document.getElementById("About"),"AboutAbout>>>>",location?.state)
    }, []);

    return (
        <>
        <>
            <div class=" bg-ground mb-5 container-fluid">
                <div class='d-flex justify-content-center pt-5 mt-5 col-12'>
                    <div class=" d-flex align-items-center pb-0 pe-2 text-white ">
                        <h1 class="display-3 pt-4">We take care of</h1>
                    </div>
                    <div class=" d-flex align-items-center">
                    <div className="object position-absolute mb-5 top-0 end-10  p-5"
                            style={{
                                transform: `translateX(${positions.x / 20}px) translateY(${positions.y / 20}px)`
                            }}
                            data-value={1}
                        >
                            <img src={grid} alt="" class='position-absolute ' width={300} id="grid" />
                        </div>
                        <img src={use} alt="" class='mb-0 mt-4 img-fluid border border-3 light-' id="tag" />
                        
                    </div>
                   
                </div>
                <div class="text-center pb-0 pe-0 top-20 ms-5 mb-4 col-mg-12 col-lg-12" >
                    <div class="d-inline-flex justify-content-center ml-1 ps-auto pb-5 img-fluid position-absolute pull-right" >
                        <img src={rect1} alt="" id="design1" class="ms-2 position-absolute z-3 img-fluid" />
                        <img src={rect2} alt="" id="design1" class="ms-2 z-2 img-fluid" />
                        <img src={rect3} alt="" id="design1" class="ms-2 z-3 img-fluid" />
                    </div>
                    <div class="d-inline-flex text-white ps-0  top-50 text-end me-4"> 
                        <h1 class="display-3 z-5">everything Digital,<span class="text-warning display-3 line-height: 1.5 fw-bold">so you <br /> can take care of your Business</span></h1>
                    </div>
                </div>
                <div class='text-center'>
                    <h5 class="text-white pt-2 fst-normal col-12">
                        Ideas come to life when innovation meets practicality. As a leading software development company, we help you leverage the <br /> right technology with expert support.
                    </h5>
                </div>
                <div class="text-center pt-5 pb-4 mb-5 col-12" id="button-borders">
                    <button  className="button "> Free Consulting <i class="bi bi-arrow-right-circle text-warning"></i></button>
                </div>
            </div>

        </>
        
        <About/>
        <OurService/>
        <Wedo/>
        <Client/>
        <Review/>
        <Consultant/>
        <Contactus/>
        <Footer/>
    
        </>
    
    )
}
export default Home;