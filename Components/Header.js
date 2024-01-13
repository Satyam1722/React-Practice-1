import React, { useContext, useState } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'

const Header = (props) => {
    const user=useContext(MyContext)
  return (
    <>
    <div className='bg-green-500 p-8'>
        {user}
    </div>

    </>
  )
}

export default Header