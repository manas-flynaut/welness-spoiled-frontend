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
import TablePagination from '@mui/material/TablePagination'
import Account from 'mdi-material-ui/Account'
import Tooltip from '@mui/material/Tooltip'
import CardContent from '@mui/material/CardContent'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import axios from "axios"

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 const Users = () => {
  const router = useRouter()
  const [page, setPage] = useState(0)
  const [channelID, setChannel] = useState(null)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [structureData,setStructureData] = useState([]);
  const [afterDelete,setAfterDelete] = useState(false);
  const [listIndex, setListIndex] = useState(undefined);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen, setmodalOpen] = useState(false);
  const open = Boolean(anchorEl);
  useEffect(() => {
    // var isUserId = sessionStorage.getItem("userExists");
    // let user = JSON.parse(isUserId)
    // if(!user){
    //     navigateTo(`/login`);
    // return;
    // }else{
    //     navigateTo(`/dashboard`);
    // }
    getUsersData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeStatus = async () => {
    console.log(channelID)
    setAnchorEl(null);
    setmodalOpen(true);
    // let res = await axios.delete(`http://127.0.0.1:8000/api/update_status?channel_id=${channelID}`)
    // setAfterDelete(!afterDelete)
  }

  async function getUsersData(){
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NlYjZmYTJhNjg3NmYwYjZiNDI0MDUiLCJleHAiOjE2OTAxMzA2MzEuMzg0LCJpYXQiOjE2NzQ0OTIyMzF9.my7w-04sADjlvbX0QrED7imXfa4BCLzgxxlJObobfeE'
    }
    let responce = await axios.get(`http://159.89.165.89:8002/api/v1/user/get-all`,{
      headers: headers
    })

    if(responce){
      console.log("datalength",responce.data.data)
      setStructureData(responce.data.data)
    }
  
  }

  const editDetails = async () => {
    router.push(`/users/edit`)
  }

  const handleAction = async () => {
    console.log(channelID)
    // setAnchorEl(null);
    // setmodalOpen(true);
    var userInfo = localStorage.getItem("userInfo");
    let user = JSON.parse(userInfo)
    const headers = {
      'Authorization': `Bearer ${user.token}`
    }
    let res = await axios.get(`http://127.0.0.1:8000/api/update_status?channel_id=${channelID}`,{
      headers: headers
    })
    setmodalOpen(false);
    setAfterDelete(!afterDelete)
  }

  const statusObj = {
    true: { color: 'error' },
    false: { color: 'success' },
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
              <TableCell>Image</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              {/* <TableCell>Gender</TableCell> */}
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {/* {structureData.map(row => ( */}
          {structureData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
            <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
            <TableCell>
              <img
              src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
              width={40}
              alt='Player'
              style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:60,
                height:60,
                backgroundColor:'#fff',
                borderRadius:50,
              }}
            />
            </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.phone}</TableCell>
          <TableCell>{row.email}</TableCell>
          {/* <TableCell>{row.id}</TableCell> */}
                <TableCell>
                <Chip
                    label={row.blocked == true ? "Suspended" : "Active"}
                    color={statusObj[row.blocked].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                  </TableCell>
                  
                  <TableCell>
                  <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={ (e) =>
                    handleClick(e,setChannel(row.id))
                  }
                >
                  Choose
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={()=>changeStatus()}>{row.blocked == true ? "Resume" : "Suspend"}</MenuItem>
                  <MenuItem onClick={editDetails}>Edit</MenuItem>
                  <MenuItem onClick={changeStatus}>Delete</MenuItem>
                </Menu>
                  </TableCell>
                  </TableRow>
                  )
                })}
                  
          </TableBody>
        </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component='div'
        count={structureData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog
        open={modalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you Sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setmodalOpen(false)}>Close</Button>
          <Button onClick={handleAction}>Agree</Button>
        </DialogActions>
      </Dialog>
      </Card>
        )
        }

        export default Users