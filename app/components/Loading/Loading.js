import React from 'react'
import FontAwesome from 'react-fontawesome'
import './Loading.scss'

export default function Loading() {
  return (
    <div className="loading-container"> 
      <FontAwesome name='spinner' className='fa-spin' />
    </div>
  )
}