// ** MUI Imports
import React, { forwardRef,useState,useEffect } from "react";
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
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
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import axios from "axios"
// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const addUser = () => {
    const router = useRouter()
    const [language, setLanguage] = useState([])
    const [date, setDate] = useState(null)

    const [values, setValues] = useState({
      password: '',
      password2: '',
      showPassword: false,
      showPassword2: false,
      username: '',
      email: '',
      firstname:'',
      lastname:'',
      phone_number:'',
      role:''
    })

    const newUser = async (event) => {
      event.preventDefault();
      const headers = {
        'Content-Type': 'application/json'
      }
      const { email, password, password2, firstname, lastname, role, phone_number } = values;
      let body = {"email":email,"password":password,"phone":phone_number,"name":firstname+''+lastname,"otp":"1234"}
      console.log("bbbody",body)
      let res = await axios.post('http://localhost:8002/api/v1/signup',body, {
        headers: headers
      })
      console.log("ressss",res.data)
      if(res.data)
      {
        router.push(`/users`)
      }else {
        console.log(formData)
      }
    }

    const handlePasswordChange = prop => event => {
      setValues({ ...values, [prop]: event.target.value })
    }

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleMouseDownPassword = event => {
      event.preventDefault()
    }

    // Handle Confirm Password
    const handleConfirmChange = prop => event => {
      setValues({ ...values, [prop]: event.target.value })
    }

    const handleClickShowConfirmPassword = () => {
      setValues({ ...values, showPassword2: !values.showPassword2 })
    }

    const handleMouseDownConfirmPassword = event => {
      event.preventDefault()
    }

    // Handle Select
    const handleSelectChange = event => {
      setLanguage(event.target.value)
    }
    return (
      <DatePickerWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
          <Card>
      <CardHeader title='Add User' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={newUser}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Account Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Username' placeholder='carterLeonard' onChange={(e) => {
                  setValues({ ...values, username: e.target.value });
              }}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' onChange={(e) => {
                  setValues({ ...values, email: e.target.value });
              }}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-separator-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='form-layouts-separator-password'
                  onChange={handlePasswordChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-separator-password-2'>Confirm Password</InputLabel>
                <OutlinedInput
                  value={values.password2}
                  label='Confirm Password'
                  id='form-layouts-separator-password-2'
                  onChange={handleConfirmChange('password2')}
                  type={values.showPassword2 ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        aria-label='toggle password visibility'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                      >
                        {values.showPassword2 ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Personal Info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='First Name' placeholder='Leonard' onChange={(e) => {
                  setValues({ ...values, firstname: e.target.value });
              }}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Last Name' placeholder='Carter' onChange={(e) => {
                  setValues({ ...values, lastname: e.target.value });
              }}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Roles</InputLabel>
                <Select
                  label='Roles'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                  onChange={(e) => {
                    setValues({ ...values, role: e.target.value });
                }}
                >
                  <MenuItem value='1'>Admin</MenuItem>
                  <MenuItem value='2'>User</MenuItem>
                  <MenuItem value='3'>Coach</MenuItem>
                  <MenuItem value='4'>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
                <Select
                  multiple
                  value={language}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Spanish'>Spanish</MenuItem>
                  <MenuItem value='Portuguese'>Portuguese</MenuItem>
                  <MenuItem value='Italian'>Italian</MenuItem>
                  <MenuItem value='German'>German</MenuItem>
                  <MenuItem value='Arabic'>Arabic</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                onChange={date => setDate(date)}
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' onChange={(e) => {
                  setValues({ ...values, phone_number: e.target.value });
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
  
  export default addUser