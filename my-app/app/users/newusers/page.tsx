'use client'
import React, { useEffect, useState } from 'react'


const Newusers = () => {
  const [time,setTime]=useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    setTime(new Date().toLocaleTimeString())
  },[])
  return (
    <>
    Hello at <p>{time}</p>
    <div>newusers</div>
    </>
  )
}

export default Newusers