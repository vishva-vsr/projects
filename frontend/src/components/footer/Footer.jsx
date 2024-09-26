import React from 'react'
import logo from "./Brand.png"
import './Footer.css'

function Footer() {
  return (
    <div className='only'>
       <div className="container mt-5 mb-5">
      <footer>
        <div className="row">
          <div className="col mt-5 col-6 col-md-1">
            <img src={logo} alt="" width={50} height={50} />
          </div>
          
          <div className="col-6 mt-5 me-1  col-md-2 col-sm-6">
            <ul className='list-unstyled text-white'>
              <li className='mb-3 fw-semibold'>Our Location</li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>About Us</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Services</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Contact Us</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>FAQs</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Bloga</a></li>
            </ul>
          </div>
          <div className="col-6 mt-5 me-5  col-md-2 col-sm-6">
            <ul className='list-unstyled'>
              <li className='text-white mb-3 fw-semibold'>Customer Support</li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Shipping</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Returns</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Track Order</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Privacy Policy</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-6 mt-5 me-2 col-md-2 col-sm-6">
            <ul className='list-unstyled fs-6'>
              <li className='text-white mb-3 fw-semibold'>Accessibility</li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Sustainability</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Affiliate Program</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Become a Partner</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Careers</a></li>
              <li id='txt-1 '><a href="" className='text-white text-decoration-none fw-light mb-2'>Press</a></li>
            </ul>
          </div>
          <div className="col-6 text-white mt-5 me-5 col-md-4 col-sm-6">
            <span className='fs-6 fw-bold mb-5'>For Free Consulting</span>
            <p className='fw-light'>Join our mailing list for the latest updates and promotions.</p>
            <div class="input-group">
              <input type="text" class="form-control rounded-pill mb-2 h-100 p-2 position-relative"  aria-label="Recipient's username" aria-describedby="button-addon2"></input>
              <button class="btn btn-warning rounded-pill mb-2 position-absolute end-0 me-0  p-2 " type="button" id="button-addon2">Get Enquire</button>
              <p className='fw-light'>By subscribing, you agree to our Privacy Policy and consent to receive updates from us.</p>

            </div>
          </div>

        </div>
        <div className="row text-white mt-5">
          <hr />
          <div className='col-8 d-flex inline text-white p-3'>

            <p className='p-2 fw-light'>© 2023 Relume. All rights reserved.</p>
            <p className='p-2 fw-light'>Privacy Policy</p>
            <p className='p-2 fw-light'>Terms of Service</p>
            <p className='p-2 fw-light'>Cookie Settings</p>
          </div>
          <div className=' col-4 text-end mt-3'>
              <a href="" className='p-2 fs-3 text-white '><i class="bi bi-facebook"></i></a>
               <a href="" className='p-2 fs-3 text-white'><i class="bi bi-instagram"></i></a>
               <a href="" className='p-2 fs-3 text-white'><i class="bi bi-twitter-x"></i></a>
               <a href="" className='p-2 fs-3 text-white'><i class="bi bi-linkedin"></i></a>
               <a href="" className='p-2 fs-3 text-white'><i class="bi bi-youtube"></i></a>

            </div>
        </div>
      </footer>

    </div>
    </div>
   
  )
}

export default Footer