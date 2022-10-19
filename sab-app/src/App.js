
import "./App.css"
import React, { Component } from 'react'
import Q1Employee from "./Q1Employee";
import Q2Groceries from "./Q2Groceries"
import Q3Objectpass from "./Q3Objectpass"

class App extends Component {
    
    grocery = [{
        id: 1,
        name: "Basmati Rice",
        price: 8.40,
        brand: "Giant"
    }, {
        id: 2,
        name: "Milo Can",
        price: 2.20,
        brand: "Nestle"
    }, {
        id: 3,
        name: "Brocoli",
        price: 1.35,
        brand: "NTUC"

    }]
// Q3Objectpass question
    state = {
        firstName: "Lance Armstrong",
        age: 43,
        designation: "Spaceman",

    }

    render() {
        return (
            <div>
                <Q1Employee />


                <Q2Groceries
                    data={this.grocery}
                />

                {<Q3Objectpass
                    firstName={this.state.firstName}
                    age={this.state.age}
                    designation={this.state.designation}

                />}
            </div>
        )
    }
}

export default App;