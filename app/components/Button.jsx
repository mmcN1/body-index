import React from 'react'

const Button = ({ handleSubmit }) => {
    return (
        <div>
            <button className='w-36 p-2 bg-orange-600' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Button
