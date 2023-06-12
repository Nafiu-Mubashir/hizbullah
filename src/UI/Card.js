import React from 'react'

const Card = (props) => {
  return (
    <div className={`bg-[#FFF] rounded-[10px] shadow-2xl ${props.className}`}>{props.children}</div>
  )
}

export default Card