"use client"

import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'


const page = ({params}) => {
  const {id} =params;
  const [users, setusers] = useState([])
  const getdata= async ()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
    setusers(data)
  }

  useEffect(() => {
    getdata();
  }, [])
  
  return (
    <>
    <div>{JSON.stringify(users)}</div>
    </>
  )
}

export default page