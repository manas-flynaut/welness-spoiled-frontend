import React, { forwardRef,useState,useEffect } from "react";

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

import axios from "axios"
// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import Link from 'next/link'
import { useRouter } from 'next/router'

const addRole = () => {
  const router = useRouter()
  const [values, setValues] = useState({
    name: '',
    description: ''
  })

  const newRole = async (event) => {
    event.preventDefault();
    var userInfo = localStorage.getItem("userInfo");
    let user = JSON.parse(userInfo)
    const headers = {
      'Authorization': `Bearer ${user.token}`
    }
    const { name, description } = values;
    let body = {"name":name,"description":description}
    console.log("bbbody",body)
    let res = await axios.post('http://159.89.165.89:8002/api/v1/role/add',body, {
      headers: headers
    })
    console.log("ressss",res.data)
    if(res.data)
    {
      router.push(`/roles`)
    }else {
      console.log(formData)
    }
  }
    return (
      <DatePickerWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
          <Card>
      <CardHeader title='Add Role' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={newRole}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Role Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Title' placeholder='carterLeonard' onChange={(e) => {
                  setValues({ ...values, name: e.target.value });
              }}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Description' placeholder='carterLeonard' onChange={(e) => {
                  setValues({ ...values, description: e.target.value });
              }}/>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
          </Grid>
        </Grid>
      </DatePickerWrapper>
    )
  }
  
  export default addRole