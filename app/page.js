"use client"

import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [data, setdata] = useState("")
  const getimage= async ()=>{
    const response=await axios.get("https://picsum.photos/v2/list")
    setdata(JSON.stringify(response.data));
  }
  return (
    <>
    <button onClick={getimage} className='bg-green-700 p-3 rounded-md text-white m-8 font-bold px-5 py-2'>
      Deployment
    </button>
    <div>
      {data}
    </div>
    </>
  )
}

export default page