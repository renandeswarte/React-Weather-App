import React from 'react'
import CitySeach from './CitySeach'
import './CitySeach.scss'

function CitySeachContainer({containerClass = ''}) {
  return (
    <div className={`form-container city-form-container ${containerClass}`}>
      <CitySeach />
    </div>
  )
}

export default CitySeachContainer