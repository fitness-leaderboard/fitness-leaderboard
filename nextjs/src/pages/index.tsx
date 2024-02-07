import React from 'react'
import { Button, TextField, Box } from '@mui/material'

const Dashboard = () => {
  const [ email, setEmail ] = React.useState('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  
  const handleSubmitSignUp = async (event: any) => {
    event.preventDefault();
    const res = await fetch(`/api/email/validateEmailFormat?email=${email}`)
    // {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ receipientEmail: 'lin.kenn@northeastern.edu', token: '1234HU' }),
    // })
    const data = await res.json()
    console.log(data);
  };

  return (
    <Box>
      <TextField placeholder='Enter email' value = {email} onChange={ handleEmailChange } sx={{ width: 500, height: 20 }}/>
    <Button onClick={handleSubmitSignUp}>
      Check Email
    </Button>
   </Box>
  )
}

export default Dashboard
