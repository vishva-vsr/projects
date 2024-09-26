import React from "react"
import '../Consultant/consultant.css'
function Consultant() {
    return (
        <>
        <div className="over-con">
        <div className="bg-secondarys d-flex-inline ">
                <div className='container '>
                    <div className=" row list-inline col-12 ">
                        <div  id="div1" className=" col-6  mt-4">
                            <h1 className="text-black fw-normal text-center p-3 w-100 mt-5 fs-1  pt-3" id="tabs1">HAVE  A  PROJECT</h1>
                        </div>
                        <div className="col-6 mt-0">
                            <p id="ones" className="text-warning display-4 ">IDEA?</p>
                        </div>
                    </div>
                    <div className=' row'>
                        <div class="col-6">
                        </div>
                        <div class="col-6 mt-0">
                            <h1 id='tabs1' className="  p-3 fs-1 fw-normal text-center list-inline  mb-5 ">FEEL FREE TO CONTACT</h1>
                        </div>
                    </div>
                    <div className='text-center row container-fluid'>
                        <h1 id='four' className="text-warning text-center mt-4 list-inline fw-light display-4 lh-base">GET IN TOUCH FOR A FREE CONSULTATION </h1>
                    </div>
                    <div className="text-center mb-4  ">
                        <button className='buttons mb-5 mt-3'>For Consultant</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Consultant