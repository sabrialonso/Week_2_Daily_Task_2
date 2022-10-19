import React from 'react'
import data from "./Data";


const handleHover = (data) => {
    alert(`
    Name: ${data.strName}
    Age:${data.strAge}
    DOB: ${data.strDOB}
    Salary:${data.salary}
    Designation:${data.strDesignation}
    Department:${data.strDepartment}
    `)
}

const displayData = data.employees.map(info => {
    return (
            <div key={info.idCategory} className='employee-card'>
                <img src={info.strCategoryThumb} className='employee-image' />
                <h4 onMouseOver={() => handleHover(info)}>{info.strName}</h4>
                <p>{info.strDesignation}</p>
            </div>
    )
});


const Q1Employee = () => {
    return (
        <div>
            <h2>Employees Data</h2><div className="flex-div">
            <div>
                {displayData}
            </div>
        </div>
        </div>
    )
}

export default Q1Employee;