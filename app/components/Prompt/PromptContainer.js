import React from 'react'
import Prompt from './Prompt'
import './Prompt.scss'

function PromptContainer({containerClass = ''}) {
  return (
    <div className={`form-container city-form-container ${containerClass}`}>
      <Prompt />
    </div>
  )
}

export default PromptContainer