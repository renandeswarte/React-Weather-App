import React from 'react'
import AddCity from './AddCity'
import './AddCity.scss'

function AddCityContainer({addCityUpdate, containerClass = ''}) {
  return (
    <div className={`form-container city-form-container ${containerClass}`}>
      <AddCity addCityUpdate={addCityUpdate}/>
    </div>
  )
}

export default AddCityContainer