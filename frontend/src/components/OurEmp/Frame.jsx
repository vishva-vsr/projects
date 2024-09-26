import React from "react";
import { EmpData } from "./EmpData";
import "./Frame.css"

const EmployeeCard = ({ employee }) => {
    return (
        <div className="col mt-2">
            <div 
                className="position-relative bg-dark rounded-5 mt-5" 
                style={{ 
                    backgroundImage: `url(${employee.imgs})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    width: '280px', 
                    height: '400px' 
                }}
            >
                <img 
                    src={employee.img} 
                    alt={employee.name} 
                    width={280} 
                    height={400} 
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-5" 
                />
                <div className="position-absolute bottom-0 start-50 translate-middle-x text-white text-center mb-3 z-1" >
                    <div id="crd-bg">
                    <p>{employee.name}</p>
                    <p>{employee.role}</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    );
};

const EmployeeList = () => {
    return (
        <><div className="container ">
            <div className="row">
                {EmpData.map((employee, index) => (
                    <EmployeeCard key={index} employee={employee} />
                ))}
            </div>
        </div>
        <div className="d-flex justify-content-center mt-3 mb-3"><button className="buttons2 ">View More</button></div>
        </>
    );
};

export default EmployeeList;
