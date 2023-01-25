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

const Bookings = () => {
    return (
        <Card>
          <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
              <TableRow>
                  <TableCell>Booking ID</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {/* {structureData.map(row => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.description}</TableCell>
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
            ))} */}
            </TableBody>
          </Table>
          </TableContainer>
        </Card>
          )
}

export default Bookings