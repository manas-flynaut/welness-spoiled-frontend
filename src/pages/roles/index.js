import React, { useState,useEffect } from "react";
// ** Demo Components Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

import { Router } from "next/router";
import axios from "axios"

 const Roles = () => {
  const [structureData,setStructureData] = useState([]);
  useEffect(() => {
    // var isUserId = sessionStorage.getItem("userExists");
    // let user = JSON.parse(isUserId)
    // if(!user){
    //     navigateTo(`/login`);
    // return;
    // }else{
    //     navigateTo(`/dashboard`);
    // }
    // getStructureData();
}, []);

async function getStructureData(){
  var token = "2001|mByUYNoGv6bue6cJrvKPp6CwVr8EU8FPb0F7S5dp"
  const headers = {
    'Authorization': 'Bearer 2001|mByUYNoGv6bue6cJrvKPp6CwVr8EU8FPb0F7S5dp'
  }
  let responce = await axios.get(`http://localhost:8000/api/structure_list`,{
    headers: headers
  })
  
  // let responce = await axios.post(`http://localhost:8000/api/login`,{
  //   email: 'amit@gmail.com',
  //   password: '12345',
  //   device_token:'1',
  //   device_type:'1'
  // })
  if(responce.data.status == 200){
    console.log("datalength",responce.data.data)
    setStructureData(responce.data.data)
  }
  
  }

  const statusObj = {
    0: { color: 'info' },
    3: { color: 'error' },
    1: { color: 'primary' },
    4: { color: 'warning' },
    2: { color: 'success' }
  }
    return (
      <Card>
        <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
        <TableHead>
            <TableRow>
                <TableCell>Role Name</TableCell>
                <TableCell>Role Description</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {/* {structureData.map(row => (
            <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
          <TableCell><img
              src={row.channel_image}
              width={60}
              alt='Player'
            /></TableCell>
          <TableCell>{row.channel_name}</TableCell>
          <TableCell>{row.category_name}</TableCell>
          <TableCell>{row.organization_url}</TableCell>
          <TableCell>{row.total_subscribers}</TableCell>
          <TableCell>{row.objective}</TableCell>
                <TableCell>
                <Chip
                    label={row.is_active}
                    color={statusObj[1].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                  </TableCell>
                  </TableRow>
                  ))} */}
                  
          </TableBody>
        </Table>
        </TableContainer>
      </Card>
        )
        }

        export default Roles