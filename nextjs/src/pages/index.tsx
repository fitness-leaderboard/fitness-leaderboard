import React from 'react'
import { Button } from '@mui/material'

const Dashboard = () => {

  const handleSubmitSignUp = async (event: any) => {
    event.preventDefault();
    fetch('/api/email/validateEmailFormat?email=test@northeastern.edu')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  return (
   <Button onClick={handleSubmitSignUp}>
    Push
   </Button>
  )
}

export default Dashboard
