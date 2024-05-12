import React from 'react'
import arrow from '../assets/icon-arrow.svg'
import './Rectangle3.css'


export const Rectangle3 = () => {
  return (
    <div className='rectangle3'>
        <div className='line'></div>
        <div className='arrow'><img  className='arrow-image' src={arrow}/></div>
        <div className='line'></div>

    </div>
  )
}
