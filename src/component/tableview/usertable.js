import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import './usertable.css';
import Typography from '@mui/material/Typography';




export const UserTable = ({user}) => {


  return (
    <Grid item xs={12} sm={10} md={8} lg={6} >
      <TableContainer component={Paper}  className='tablelayout'>
        <Table sx={{ minWidth: 700, overflow: 'auto' }}  aria-label="table" >
          <TableHead>
           
            <TableRow className='header'>
           
            <TableCell  className='tableheader'>No</TableCell>
          
              <TableCell align="left"   className='tableheader'>Name</TableCell>
              <TableCell align="left" className='tableheader'>&nbsp;Email&nbsp;</TableCell>
              <TableCell align="left" className='tableheader'>&nbsp;Phone&nbsp;</TableCell>
              <TableCell align="left" className='tableheader'>&nbsp;Address&nbsp;</TableCell>
              <TableCell align="left" className='tableheader'>&nbsp;Company&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { (user.filteredUsers.length === 0? user.users : user.filteredUsers).map((user) => (
           <TableRow
                key={user.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row"> {user.id} </TableCell>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.phone}</TableCell>
                <TableCell align="left">{user.address.city}</TableCell>
                <TableCell align="left">{user.company.name}</TableCell>
              </TableRow>
  ))
}

          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}