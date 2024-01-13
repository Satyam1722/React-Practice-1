import React from 'react'

const Nav = (props) => {
    console.log(props.num); 
  return (
    <div className='bg-red-500 text-white p-2'>{props.num}</div>
  )
}

export default Nav