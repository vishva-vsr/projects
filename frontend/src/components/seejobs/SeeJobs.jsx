import Footer from "../footer/Footer.jsx";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Jobdesc = `We are on the hunt for a seasoned and inventive Lead Designer to be an integral part of
our brand new office in Bangalore. This exciting opportunity will place the successful
candidate at the heart of our burgeoning Indian operations, contributing significantly to
Blue Mandarin's growth. You'll primarily be involved in an array of Middle Eastern and
European projects, leveraging your creative prowess to deliver exceptional outcomes.
This role forms a pivotal part of our strategic expansion, offering a competitive monthly
salary of 1.2 Lakh INR, with the possibility of company equity in the form of stock options
for the right fit. As we lay the groundwork for our immediate future, you will be joining a
cohesive team of 15 professionals, all driven to make our Bangalore office a hub of
innovation and creativity.`;

const Responsi = [
  "Lead and manage creative projects, ensuring high-quality execution of design concepts across diverse mediums such as websites, branding, visual designs, and software interfaces.",
  "Develop, prototype and test user interface designs for software applications, ensuring a seamless and intuitive user experience.",
  "Lead and mentor a team of talented designers, facilitating their professional growth and maintaining a collaborative and innovative culture.",
  "Serve as a client-facing representative of our design team, providing strategic guidance and building strong client relationships.",
  "Stay ahead of industry trends and advancements in design and technology, integrating them into your team’s work when appropriate.",
];

const Qualifications = [
  `Minimum of 5 years of design experience, with a portfolio demonstrating your skills
across various mediums such as websites, branding, visual designs, and software
interface designs.`,
  `Experience in leading and managing creative teams.`,
  `Excellent leadership and team-building skills.`,
  `Strong client-facing experience, with the ability to understand and interpret client
needs.`,
  `Strong knowledge of industry-standard design tools, software, and UX/UI principles.`,
  `Excellent communication skills, both verbal and written.`,
  `A strong eye for aesthetics and attention to detail.`,
  `Bachelor’s or master’s degree in Design, Visual Arts, or a related field is preferred.`,
];

function SeeJobs() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-md">
        <div className="row">
          <div className="col d-flex align-items-center mt-5">
            <i
              className="bi bi-arrow-left-circle fs-1 text-warning"
              onClick={() => navigate('/Careers')}
            ></i>
            <span className="fs-6 ms-2 text-warning">Back to Job Openings</span>
          </div>
        </div>
        <div className="row">
          <h1 className="text-warning mt-4">Lead Designer</h1>
          <span className="text-white">Bangalore, India</span>
        </div>
        <div className="row">
          <div className="col-8">
            <h2 className="text-warning mt-5">Job Description</h2>
            <p className="text-white">{Jobdesc}</p>
            <h2 className="text-warning mt-5">Responsibilities</h2>
            <ul className="text-white list-unstyled mt-3">
              {Responsi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h2 className="text-warning">Qualifications</h2>
            <ul className="text-white list-unstyled">
              {Qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="mt-5">
              <span className="text-white mt-5">
                At Promethean, we value diversity and always treat all employees and job applicants
                based on merit, qualifications, competence, and talent. We do not discriminate on any
                basis.<br />
              </span>
              <span className="text-white mt-5">
                At Promethean, we value diversity and always treat all employees and job applicants
                based on merit, qualifications, competence, and talent. We do not discriminate on any
                basis.
              </span>
            </div>
          </div>
          <div className="col-4">
            <span className="text-white">Overview</span>
            <div className="row mt-4">
              <div className="col">
                <label htmlFor="" className="text-white p-3">Job location</label>
              </div>
              <div className="col">
                <div className="dropdown">
                  <button
                    className="btn btn-outline-light rounded-pill p-3 dropdown-toggle"
                    type="button"
                    id="locationDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pondicherry, India
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="locationDropdown">
                    <li>
                      <a className="dropdown-item" href="#">Pondicherry, India</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Chennai, India</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label htmlFor="" className="text-white p-3">Contract type</label>
              </div>
              <div className="col ms-4">
                <div className="dropdown">
                  <button
                    className="btn btn-outline-light rounded-pill p-3 dropdown-toggle"
                    type="button"
                    id="contractTypeDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Full Time
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="contractTypeDropdown">
                    <li>
                      <a className="dropdown-item" href="#">Full Time</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label htmlFor="" className="text-white p-3">Department</label>
              </div>
              <div className="col ms-4">
                <div className="dropdown">
                  <button
                    className="btn btn-outline-light rounded-pill p-3 dropdown-toggle"
                    type="button"
                    id="departmentDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Design
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="departmentDropdown">
                    <li>
                      <a className="dropdown-item" href="#">Design</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">FrontEnd</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">BackEnd</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label htmlFor="" className="text-white p-3">Working hours</label>
              </div>
              <div className="col ms-4">
                <div className="dropdown">
                  <button
                    className="btn btn-outline-light rounded-pill p-3 dropdown-toggle"
                    type="button"
                    id="workingHoursDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    8 hours/day
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="workingHoursDropdown">
                    <li>
                      <a className="dropdown-item" href="#">8 hours/day</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col ms-1">
                <label htmlFor="" className="text-white p-3">Salary</label>
              </div>
              <div className="col ms-4">
                <div className="dropdown">
                  <button
                    className="btn btn-outline-light rounded-pill p-3 dropdown-toggle"
                    type="button"
                    id="salaryDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    120,000 INR
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="salaryDropdown">
                    <li>
                      <a className="dropdown-item" href="#">120,000 INR</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center mt-3 ms-3">
                <button className="btn btn-primary btn-lg fs-6 w-100 rounded-pill p-3">Apply by Linkedin</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SeeJobs;
