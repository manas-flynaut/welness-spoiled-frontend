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
    getRolesData();
}, []);

async function getRolesData(){
  const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NlYjZmYTJhNjg3NmYwYjZiNDI0MDUiLCJleHAiOjE2OTAxMzA2MzEuMzg0LCJpYXQiOjE2NzQ0OTIyMzF9.my7w-04sADjlvbX0QrED7imXfa4BCLzgxxlJObobfeE'
  }
  let responce = await axios.get(`http://159.89.165.89:8002/api/v1/role/get-all`,{
    headers: headers
  })

  if(responce){
    console.log("datalength",responce.data.data)
    setStructureData(responce.data.data)
  }

}

  const statusObj = {
    true: { color: 'success' },
    false: { color: 'error' },
    // 1: { color: 'primary' },
    // 4: { color: 'warning' },
    // 2: { color: 'success' }
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
                {/* <TableCell>Action</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
          {structureData.map(row => (
            <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.description}</TableCell>
          {/* <TableCell>{row.status}</TableCell> */}
                <TableCell>
                <Chip
                    label={row.status == true ? "Active" : "Deactivated"}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                  </TableCell>
                  </TableRow>
                  ))}
                  
          </TableBody>
        </Table>
        </TableContainer>
      </Card>
        )
        }

        export default Roles