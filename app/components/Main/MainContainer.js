import React from 'react'

function MainContainer (props) {
  return (
    <div className={`page-container container ${props.pageName}`} style={props.bg}>
      {props.children}
    </div>
  )
}

export default MainContainer