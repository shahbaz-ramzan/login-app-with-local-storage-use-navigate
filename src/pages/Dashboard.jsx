import React, { useEffect } from 'react'
import {  useNavigate} from 'react-router-dom'

function Dashboard() {
const navigate = useNavigate()
   
  useEffect(()=>{
    const storedStatus=localStorage.getItem('status')
    console.log("status",{storedStatus})
    if(!storedStatus){
    
      navigate('/login')
    }

  },[])
   



  return (
    <div>Dashboard</div>
  )
}

export default Dashboard