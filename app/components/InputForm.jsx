import React from 'react'

const InputForm = ({ handleChange }) => {
    return (
        <>
            <label >
                <h1 className='flex ml-7'>Height (cm)</h1>
                <div className='flex flex-col items-center'>
                    <input className='p-2 rounded text-blue-500 w-4/5 ring-slate-800 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 ring-1 ' type='number' onChange={(event) => handleChange('height', event.target.value)} />
                </div>
            </label>
            <label >
                <h1 className='flex ml-7'>Weight (kg)</h1>
                <div className='flex flex-col items-center'>
                    <input className='p-2 rounded text-blue-500 w-4/5 ring-slate-800 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 ring-1' type='number' onChange={(event) => handleChange('weight', event.target.value)} />
                </div>
            </label>
            <label >
                <h1 className='flex ml-7'>Neck (cm)</h1>
                <div className='flex flex-col items-center'>
                    <input className='p-2 rounded w-4/5 ring-slate-800 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 ring-1' type='number' />
                </div>
            </label>
            <label >
                <h1 className='flex ml-7'>Waist (cm)</h1>
                <div className='flex flex-col items-center'>
                    <input className='p-2 rounded w-4/5 ring-slate-800 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 ring-1' type='number' />
                </div>
            </label>
            <label >
                <h1 className='flex ml-7'>Age</h1>
                <div className='flex flex-col items-center'>
                    <input className='p-2 rounded w-4/5 ring-slate-800 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 ring-1' type='number' />
                </div>
            </label>
            <label >
                <h1 className='flex ml-7'>How many days a week do you exercise?</h1>
                <div className='flex flex-col items-center'>
                    <input className='p-2 rounded w-4/5 ring-slate-800 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 ring-1' type='number' />
                </div>
            </label>
        </>
    )
}

export default InputForm
