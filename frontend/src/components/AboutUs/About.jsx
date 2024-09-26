import React from "react";
import post from "../AboutUs/post1.gif"
import "../AboutUs/about.css"

function About() {
    return (
        <div id="About">
            <div class="snd-pg py-5 ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div class="mt-5">
                                <h1 class="fw-light text-light">Hi there, We’re <span class="text-warning fw-semibold">Promethean</span></h1>
                            </div>
                            <div class="mt-1">
                                <p class="text-white fs-5">
                                    Promethean is a global technology company, home to more than 150+ people across 5 States,
                                    delivering industry-leading capabilities centered around digital, engineering and cloud,
                                    powered by a broad portfolio of technology services and products. We work with clients across all major verticals,
                                    providing industry solutions for Financial Technology Sector, Health Service, Tourism and Accommodation,
                                    Merchandising & Cyber Commerce, Telecom and Media, Production, and Learning.
                                </p>
                            </div>
                            <div class="mt-1 fs-5 text-white">
                                <p>
                                    We don't believe in a one-size-fit-all approach.
                                    Our services are carefully customized to suit your specific need,
                                    ensuring you achieve your goals.
                                    We believe in delivering value that extends beyond the immediate project.
                                    Our services are designed to provide long-term benefits.
                                </p>
                                <button class="btn btn-outline-light btn-lg mt-5 rounded-pill col-4">Read More</button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 mt-4 mb-4 order-1 order-lg-2">
                            <img src={post} alt="" class="rounded-5 img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default About