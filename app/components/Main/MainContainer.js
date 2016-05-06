import React from 'react'

function MainContainer (props) {
  return (
    <div className="page-container">
      {props.children}
    </div>
  )
}

export default MainContainer