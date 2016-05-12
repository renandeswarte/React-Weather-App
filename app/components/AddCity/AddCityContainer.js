import React from 'react'
import AddCity from './AddCity'
import './AddCity.scss'

function AddCityContainer({containerClass = ''}) {
  return (
    <div className={`form-container city-form-container ${containerClass}`}>
      <AddCity />
    </div>
  )
}

export default AddCityContainer