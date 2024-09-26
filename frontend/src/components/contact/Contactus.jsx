import React, { useState } from "react";
import "./Contactus.css"; 


function Contactus() {
  const [selectedInterest, setSelectedInterest] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleInterestClick = (interest) => {
    setFormData({
      ...formData,
      interest: interest
      
    });
    setSelectedInterest(interest);
  };


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/contacts_Details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const responseData = await response.json();
        alert('Message sent successfully!');
        console.log("Server response:", responseData);
      } else {
        
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const errorData = await response.json(); 
          console.error("Error response:", errorData);
          alert(errorData.error || 'Failed to send message.');
        } else {
          const errorText = await response.text(); 
          console.error("Error response:", errorText);
          alert(errorText);
        }
      }
    } catch (error) {
      console.error("There was an error sending the data!", error);
      alert('There was an error sending the message.');
    }
  };

  return (
    <div className="container" id="con-1">
      <div className="row">
        <div className="col fw-bold fs-1 ms-4">
          <p className="text-white">
            Let’s discuss <br />
            something <span className="text-warning">cool</span> 
            <p>together</p>
          </p>

          
          <div className="col d-flex mt-5 mb-4 button-like" onClick={() => window.location.href = 'mailto:SaulDesign@gmail.com'}>
            <i className="bi bi-envelope-fill fw-semibold text-nowrap fs-3 me-2 text-warning"></i>
            <p className="fs-6 mt-2 text-white fw-normal">SaulDesign@gmail.com</p>
          </div>

          <div className="col d-flex mb-4 button-like" onClick={() => window.location.href = 'tel:+123456789'}>
            <i className="bi bi-telephone fw-semibold text-nowrap fs-3 me-2 text-warning"></i>
            <p className="fs-6 mt-2 text-white fw-normal">+123 456 789</p>
          </div>

          <div className="col d-flex mb-4 button-like" onClick={() => window.location.href = 'https://maps.google.com/?q=123+Street+456+House'}>
            <i className="bi bi-geo-alt-fill fw-semibold text-nowrap fs-3 me-2 text-warning"></i>
            <p className="fs-6 mt-2 text-white fw-normal">123 Street 456 House</p>
          </div>

          <div className="col d-flex text-white mt-5">
            <i className="bi bi-facebook me-5 mt-5"></i>
            <i className="bi bi-linkedin me-5 ms-5 mt-5"></i>
            <i className="bi bi-twitter-x me-5 ms-5 mt-5"></i>
          </div>
        </div>

        
        <div className="col-md-12 col-lg-6 col-sm-12">
  <form className="form mt-3" id="bg-bg" onSubmit={handleSubmit}>
    <div className="row pt-4 pb-5 ps-3 pe-3">
      <div className="col mt-4" id="ontent">
        <p className="text-white fs-5 fw-semibold">I’m interested in...</p>

        {/* Interest Buttons */}
        <div className="row mb-2">
          <div className="col-md-4 col-sm-12 mb-2 d-flex justify-content-center">
            <button
              type="button"
              className={`btn btn-outline-light w-100 text-nowrap py-2  ${selectedInterest === 'UI/UX design' ? 'active' : ''}`}
              value={'UI/UX design'}
              onClick={() => handleInterestClick('UI/UX design')}
            >
              UI/UX design
            </button>
          </div>
          <div className="col-md-4 col-sm-12 mb-2 d-flex justify-content-center">
            <button
              type="button"
              className={`btn btn-outline-light w-100 text-nowrap py-2 ${selectedInterest ==='Web design'?'active' : ''}`}
              onClick={() => handleInterestClick('Web design')}
              value={'Web design'}
            >
              Web design
            </button>
          </div>
          <div className="col-md-4 col-sm-12 mb-2 d-flex justify-content-center">
            <button
              type="button"
              className={`btn btn-outline-light w-100 text-nowrap py-2 ${selectedInterest ==='Graphic design' ? 'active' : ''}`}
              onClick={() => handleInterestClick('Graphic design')}
              value={'Graphic design'}
            >
              Graphic design
            </button>
          </div>
        </div>

        <div className="row">
          <div className={`col-md-4 col-sm-12 mb-3 d-flex justify-content-center ${selectedInterest==='Design system' ? 'active' : ''}`}>
            <button
              type="button"
              className="btn btn-outline-light w-100 text-nowrap py-2"
              onClick={() => handleInterestClick('Design system')}
              value={'Design system'}
            >
              Design system
            </button>
          </div>
          <div className={`col-md-4 col-sm-12 mb-3 d-flex ${selectedInterest==='Other' ? 'active' : ''}`}>
            <button  
              type="button"
              className="btn btn-outline-light w-50 text-nowrap py-2"
              onClick={() => handleInterestClick('Other')}
              value={'Other'}
            >
              Other
            </button>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="row">
          <div className="col-12 mb-4">
            <input
              type="text"
              className="custom-inputs w-100 text-white"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              id="input-name"
            />
          </div>
          <div className="col-12 mb-4">
            <input
              type="text"
              className="custom-inputs w-100 text-white"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              id="input-email"
            />
          </div>
          <div className="col-12 mb-4">
            <input
              type="text"
              className="custom-inputs w-100 text-white"
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              id="input-message"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="row">
          <div className="col-12 d-flex  mt-5">
            <button
              className="btn btn-warning btn-lg text-white ps-4 pe-4"
              type="submit"
            >
              <i className="bi bi-send-fill text-white text-decoration-none me-2"></i>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

      </div>
    </div>
  );
}

export default Contactus;
