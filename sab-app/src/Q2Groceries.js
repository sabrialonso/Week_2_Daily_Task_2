import React from 'react'
import PropTypes from 'prop-types'


const Q2Groceries = (props) => {
    const { data } = props
    const dataDisplay = data.map(info => {
        return (
            <div key={info.id} className="vertical main">
                <p>{info.id}.</p>
                <p>: {info.name}</p>
                <p>: ${info.price}</p>
                <p>: {info.brand}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>Question 2</h2>
            {dataDisplay}
        </div>
    )
}

Q2Groceries.propTypes = {
    groceryList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        brand: PropTypes.string.isRequired
    }))
}

export default Q2Groceries;
