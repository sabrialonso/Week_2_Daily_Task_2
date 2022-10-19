import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Q3Objectpass extends Component {
    render() {
        const { firstName, age, designation} = this.props
        return (
            <div>
                <h2>Question 3</h2>
                <p>Name: {firstName}</p>
                <p>Age: {age}</p>
                <p>Designation: {designation}</p>
            </div>

        )
    }
}


Component.propTypes = {
    firstName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    designation: PropTypes.string.isRequired,

}

Component.defaultProps = {
    firstName: "Lance Armstrong",
    age: 43,
    designation: "Spaceman",
   
}

export default Q3Objectpass