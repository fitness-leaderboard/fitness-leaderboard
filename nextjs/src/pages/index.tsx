import React from 'react'
import { Button, TextField, Box, Grid } from '@mui/material'
import About from '../view/AboutView'
import ApexChartWrapper from 'src/core/style/ApexStyleWrapper'

const Dashboard = () => {
  const [email, setEmail] = React.useState('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmitSignUp = async (event: any) => {
    event.preventDefault()
    const res = await fetch(`/api/email/validateEmailFormat?email=${email}`)
    // {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ receipientEmail: 'lin.kenn@northeastern.edu', token: '1234HU' }),
    // })
    const data = await res.json()
    console.log(data)
  }

  return (
    <ApexChartWrapper>
      <Grid item xl={12}>
        {/* <TextField placeholder='Enter email' value = {email} onChange={ handleEmailChange }/>
          <Button onClick={handleSubmitSignUp}>
            Check Email
          </Button> */}

        <About />
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
