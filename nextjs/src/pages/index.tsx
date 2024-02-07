import React from 'react'
import { Button } from '@mui/material'
import axios from 'axios'

const Dashboard = () => {

  const handleSubmitSignUp = async (event: any) => {
    event.preventDefault();
    const res = await fetch('/api/email?email=test@northeastern.edu')
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
