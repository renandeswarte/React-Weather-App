import React from 'react'

function MainContainer (props) {
  return (
    <div className={`page-container container ${props.pageName}`}>
      {props.children}
    </div>
  )
}

export default MainContainer