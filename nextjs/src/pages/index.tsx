import React from 'react'
import { Button } from '@mui/material'

const Dashboard = () => {

  const handleSubmitSignUp = async (event: any) => {
    event.preventDefault();
    const res = await fetch('/api/sendVerificationEmail', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ receipientEmail: 'lin.kenn@northeastern.edu', token: '1234HU' }),
    })
    const data = await res.json()
    console.log(data);
  };

  return (
   <Button onClick={handleSubmitSignUp}>
    Push
   </Button>
  )
}

export default Dashboard
